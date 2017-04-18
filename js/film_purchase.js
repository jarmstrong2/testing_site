$(document).ready(function() {
    $(".contents").append("<div class='top_buffer'></div>")
    document.title = film_obj['film_title'] + " | Canadian Filmmakers Distribution Centre"
    $(".catalogue").css("color", "#E22134")
    $(".contents").append("<div class='accessible'></div>")
    $(".accessible").last().append("<div class='purchase_table'></div>")
    $(".purchase_table").last().append("<div class='purchase_table_cell_container'></div>")
    
    $(".purchase_table_cell_container").last().append("<div class='purchase_table_cell_left_margin'></div>")
    $(".purchase_table_cell_container").last().append("<div class='purchase_table_contents'></div>")
    $(".purchase_table_cell_container").last().append("<div class='purchase_table_cell_right_margin'></div>")

    $(".purchase_table_contents").last().append("<div class='generic_table'></div>")
    $(".generic_table").last().append("<div class='generic_table_title'><div class='generic_title'>"+ film_obj['film_title'] + "</div></div>")
    $(".generic_table").last().append("<div class='generic_spacer'></div>")

    $(".generic_table").last().append("<div class='generic_info_table'></div>")
    $(".generic_info_table").last().append("<div class='generic_text'>by <b><a href='" + web_host + "filmmaker/1'> CFMDC Special Edition</a></b></div>")
    $(".generic_info_table").last().append("<div class='generic_text_spacer'></div>")

    if (parseInt(film_purchase_obj['large_image_height']) > parseInt(film_purchase_obj['large_image_width'])) {

        $(".generic_table").last().append("<div class='generic_info_table'></div>")

        $(".generic_info_table").last().append("<div class='generic_info_purchase'>" + film_purchase_obj['film_description'] + "</div>")
        $(".generic_info_table").last().append("<div class='generic_info_spacer'></div>")
        $(".generic_info_table").last().append("<div class='generic_info_image_purchase'></div>")
        $(".generic_info_image_purchase").last().append("<img src='" + film_purchase_obj['large_image_url'] + "' class='img_container_child_portrait'>")
    }
    else {
        $(".generic_table").last().append("<div class='generic_info_table'></div>")
        $(".generic_info_table").last().append("<div class='generic_info_image_landscape_purchase'></div>")
        $(".generic_info_image_landscape_purchase").last().append("<img src='" + film_purchase_obj['large_image_url'] + "' class='img_container_child_landscape'>")
        $(".generic_info_table").last().append("<div class='generic_info_purchase'>" + film_purchase_obj['film_description'] + "</div>")
    }
})