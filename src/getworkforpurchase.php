<?php
require "film_json.php";
getWorkForPurchaseJson(3678);

function getWorkForPurchaseJson($film_number) {
    $host = "http://s219085.gridserver.com/";

    $cms_work_for_purchase_url = $host . "cms/api/work_for_purchase/" . $film_number . "?_format=xml";

    $data_cms = simplexml_load_string(file_get_contents_retry($cms_work_for_purchase_url));

    //print_r($data_cms);

    if (!$data_cms) {
        return "";
    } else {
        $film_array = array();

        $film_description = (string) $data_cms->item->field_work_description->value; 
        $large_image_url = (string) $data_cms->item->field_large_image->url; 
        $large_image_width = (string) $data_cms->item->field_large_image->width; 
        $large_image_height = (string) $data_cms->item->field_large_image->height;

        $film_array['film_description'] = $film_description;
        $film_array['large_image_url'] = $large_image_url;
        $film_array['large_image_width'] = $large_image_width;
        $film_array['large_image_height'] = $large_image_height;

        //print_r ($film_array);

        $volume_references =  $data_cms->item->field_volume_references;
        $film_array['volumes'] = array();

        //for ($i=0; $i < count($volume_references); $i++) {
        for ($i=0; $i < 1; $i++) {
            $nid = $volume_references[$i]->field_volume_reference->target_id;
            $film_array['volumes'][] = getVolume($nid);
        }
    }

    print_r($film_array);

}

function getVolume($nid) {
    $host = "http://s219085.gridserver.com/";

    $cms_work_for_purchase_url = $host . "cms/api/work_for_purchase_volume/" . $nid . "?_format=xml";

    $data_cms = simplexml_load_string(file_get_contents_retry($cms_work_for_purchase_url));

    $volume_array = array();

    $volume_array['additional_text'] = (string) $data_cms->item->field_additional_text->value; 
    $volume_array['volume_title'] = (string) $data_cms->item->field_volume_title->value; 
    $volume_array['link_colour'] = (string) $data_cms->item->field_list_colour->value; 

    // get study guides
    $study_guides = $data_cms->item->field_study_guides;
    $study_guides_array = array();

    for ($j=0; $j < count($study_guides); $j++) {
        $study_guide_array = array();
        $study_guide_array['link'] = (string) $study_guides->field_link_text->value;
        $study_guide_array['url'] = (string) $study_guides->field_study_guide_file->url;
        $study_guides_array[] = $study_guide_array;
    }

    $volume_array['study_guides'] = $study_guides_array;

    $volumes_contents = $data_cms->item->field_volume_contents;
    $volumes_contents_array = array();

    for ($j=0; $j < count($volumes_contents); $j++) {
        $volume_contents_array = array();
        $film_id = (string) $volumes_contents[$j]->field_film_id_volume->value;
        $country = (string) $volumes_contents[$j]->field_country->value;
        $description = (string) $volumes_contents[$j]->field_film_description_volume->value;
        $filmmakers = (string) $volumes_contents[$j]->field_filmmaker_s_->value;
        $title = (string) $volumes_contents[$j]->field_film_title->value;
        $length = (string) $volumes_contents[$j]->field_length->value;
        $year = (string) $volumes_contents[$j]->field_year->value;
        $image_url = (string) $volumes_contents[$j]->field_thumbnail->url;
        $sound = (string) $volumes_contents[$j]->field_sound->url;

        if ($film_id) {
            $film_obj = getFilmJson($film_id);
            $film_obj = json_decode($film_obj);

            print_r($film_obj);

            if (!$country) {
                $country = $film_obj['country'];
            }

            if (!$description) {
                $description = $film_obj['film_synopsis'];
            }

            if (!$title) {
                $title = $film_obj['film_title'];
            }

            if (!$length) {
                $length = $film_obj['length'];
            }

            if (!$year) {
                $year = $film_obj['year'];
            }

            if (!$image_url) {
                $image_url = $film_obj['still'];
            }

            if (!$sound) {
                $image_url = $film_obj['sound'];
            }
        }

        $volume_contents_array['country'] = $country;
        $volume_contents_array['description'] = $description;
        $volume_contents_array['filmmakers'] = $filmmakers;
        $volume_contents_array['title'] = $title;
        $volume_contents_array['length'] = $length;
        $volume_contents_array['image_url'] = $image_url;
        $volume_contents_array['sound'] = $sound;

        $volumes_contents_array[] = $volume_contents_array;
    }

    $volume_array['volumes_contents'] = $volumes_contents_array;

    return $volume_array;
}

// function file_get_contents_retry($url) {
//     $a = false;
//     $i = 0;
//     while($a == false && $i < 10)
//     {
//         $a = @file_get_contents($url);
//         $i++;
//         if ($a == false) {
//             usleep(10);
//         }
//     }
//     return $a;
// }

// function utf8ize($d) {
//     if (is_array($d)) {
//         foreach ($d as $k => $v) {
//             $d[$k] = utf8ize($v);
//         }
//     } else if (is_string ($d)) {
//         $d = str_replace("\xe2\x80\xa8", '\\u2028', $d);
//         $d = str_replace("\xe2\x80\xa9", '\\u2029', $d);
//         return utf8_encode($d);
//     }
//     return $d;
// }

// function file_exists_($file_path) {
//     $file_headers = @get_headers($file_path);
    
//     if( strpos($file_headers[0], '404 Not Found') !== false){
//         return false;
//     } else if (strpos($file_headers[0], '302 Found') !== false && strpos($file_headers[7], '404 Not Found') !== false){
//         return false;
//     } else {
//         return true;
//     }
// }

?>