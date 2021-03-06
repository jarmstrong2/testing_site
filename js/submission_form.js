var web_host = "http://www.cfmdc.org/";

recaptcha_checked = false;

film_form_count = 1;

function recaptchaCallback() {
    recaptcha_checked = true;
}

$(document).ready(function() {

    var _URL = window.URL || window.webkitURL;

    document.title = "Submit Now | Canadian Filmmakers Distribution Centre"

    $("#submitnow").addClass("submit_film_link_selected")
    $(".submit_film").css("color", "#0082B8")

    $(".contents").append("<div class='top_buffer'></div>")
    $(".contents").append("<div class='table'></div>")

    $(".table").append('<form action="' + web_host + 'src/film_form_submit.php" method="POST" id="film-form"></form>')
    $("form").append("<div class='table_cell_container'></div>")
    $(".table_cell_container").append("<div class='table_cell_left_margin'></div>")
    $(".table_cell_container").append("<div class='table_contents'></div>")
    $(".table_cell_container").append("<div class='table_cell_right_margin'></div>")

    $(".table_contents").append("<div class='table_title'><div class='title'></div></div>")
    $(".title").append("Submit Now")

    if (logged_in !== 1 || !is_cfmdc_member(username)) {

        $(".table_contents").append("<div class='spacer'></div>")

        $(".table_contents").append("<div class='note_table'></div>")
        $(".note_table").last().append("<div class='note_left_spacer'></div>")
        $(".note_table").last().append("<div class='note_content'></div>")
        $(".note_content").last().append("<div class='note_content_table'></div>")
        $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
        $(".note_content_table").last().append("<div class='note_content_table_content'></div>")
        $(".note_content_table_content").last().append("If you do not have a Filmmaker or Client account with us, you will need to fill out the fields in the section below. If you have an account, please log in now and continue to fill out the film(s) submission form.")
        $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
        $(".note_table").last().append("<div class='note_right_spacer'></div>")

        $(".table_contents").append("<div class='spacer'></div>")
        $(".table_contents").append("<div id='acct_request'><div class='request_acct_table'></div></div>")

         $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
         $(".request_acct_row_row").last().append("<div class='legend'>optional field <b>*</b></div>")

        // First Name 
        $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>First Name</b></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=1 type='text' id='firstname' name='firstname'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

        // Address
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Address</b></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=6 type='text' id='address' name='address'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        // Last Name 
        $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Last Name</b></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=2 type='text' id='lastname' name='lastname'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

        // City/Town
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>City/Town</b></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=7 type='text' id='city_town' name='city_town'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        // Spacer 
        $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")

        $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

        // Country
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Country</b></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=8 type='text' id='country_' name='country_'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        // Organization 
        $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Organization *</div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=3 type='text' id='organization' name='organization'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

        // Spacer 
        $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")

        $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

        // Province/State
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Province/State</b></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_small'></div>")
        $(".request_acct_input_small").last().append("<input tabindex=9 type='text' id='province_state' name='province_state'>")
        $(".request_acct_input_small").last().append("<div class='border_line'></div>")

        // Phone 
        $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Phone Number</b></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=4 type='text' id='phone' name='phone'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

        // Postal Code
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Postal/Zip Code</b></div>")
        $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_small'></div>")
        $(".request_acct_input_small").last().append("<input tabindex=11 type='text' id='postal_code' name='postal_code'>")
        $(".request_acct_input_small").last().append("<div class='border_line'></div>")

        // Spacer
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")

        // Email 
        $(".request_acct_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Email</b></div>")
        $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
        $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
        $(".request_acct_input_large").last().append("<input tabindex=5 type='text' id='email' name='email'>")
        $(".request_acct_input_large").last().append("<div class='border_line'></div>")

        $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

    }

    // Spacer
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")

    $(".table_contents").last().append("<input type='text' name='form_count' id='form_count' value='" + film_form_count.toString() + "'></input>");

    $("#form_count").hide();

    $(".table_contents").last().append("<div class='forms'></div>")

    make_film_entry(1);
    make_film_entry(2);

    $(".table_contents").last().append("<div class='spacer_with_bar'></div>")

    $(".table_contents").append("<div class='spacer'></div>")

    // recaptcha
    $(".table_contents").append("<div class='g-recaptcha-outer'><div class='g-recaptcha' data-callback='recaptchaCallback' data-sitekey='6LemsxcUAAAAACG6GzNABCispOz4O0qQFVCn4MT3'></div></div>")
    $(".table_contents").append("<div class='spacer'></div>")

    // Button
    $(".table_contents").append("<button type='submit' id='subutton'><span>Submit</span></button>")

    $(".contents").append("<div class='table_end_buffer'></div>")

    $('#film-form').submit(function(e) {
        e.preventDefault();

        if (checkFields()) {
            // console.log("yes")
            $(document.body).css({ 'cursor': 'wait' })
            $(".warning").removeClass("warning_up")
            $(".message").removeClass("message_up")
            $('#subutton').attr('disabled', true);
            $this = $(this);

            // this.submit();
            $.ajax({
                type: "POST",
                url: "http://" + $(location).attr('hostname') + "/src/film_form_submit.php",
                data: new FormData($('#film-form')[0]),
                processData: false,
                contentType: false
            }).done(function(data) {              
                $(document.body).css({ 'cursor': 'default' })
                //alert(data);
                if (data === "0") {
                    window.location.replace(web_host)
                }
                else {
                    $(".warning").find(".alert_text_table").html('<div class="normal_text"> <div class="big">An error has occurred in your submission.</div>Please contact <a class="small" href="mailto:bookings@cfmdc.org">bookings@cfmdc.org</a> for further assistance.</div>')
                    $(".warning").addClass("warning_up")
                    $('#subutton').attr('disabled', false);
                }
            })
        }
        else {
            $(".warning").find(".alert_text_table").html('<div class="normal_text"> <div class="big">You\'ve left some required fields empty or invalid, please try again.</div>')
            $(".warning").addClass("warning_up")
        }
    });

    fill_acct_request()
    fill_form(1)
    fill_form(2)

})

function check_id_count(count) {
    $("#form_entry_" + count.toString() + " :input").each(function() {
        console.log($(this).attr("id") + " " + $(this).attr("name"));
    })
}

function change_id_count(old_count, new_count) {
    $("#form_entry_" + old_count.toString() + " :input").each(function() {
        // console.log($(this).attr("id") + " " + $(this).attr("name"));

        cur_id = $(this).attr("id");
        cur_name = $(this).attr("name");

        // switch numbers
        if (cur_id.slice(-1).match(/^\d+$/)) {
            lastIndex = cur_id.lastIndexOf("_");
            $(this).attr("id", cur_id.substring(0, lastIndex) + "_" + new_count.toString());
        }

        if (cur_name !== void 0) {
            lastIndex = cur_name.lastIndexOf("_");

            if (cur_name.slice(-1).match(/^\d+$/)) {
                $(this).attr("name", cur_name.substring(0, lastIndex) + "_" + new_count.toString()); 
            }
            else {
                $(this).attr("name", cur_name.substring(0, lastIndex) + "_" + new_count.toString() + "[]"); 
            }
        }
    })

    $("#form_entry_" + old_count.toString() + " label").each(function() {

        console.log($(this).attr("for"));

        for_attr = $(this).attr("for")

        // switch numbers
        if (for_attr !== void 0 && for_attr.slice(-1).match(/^\d+$/)) {
            lastIndex = for_attr.lastIndexOf("_");
            $(this).attr("for", for_attr.substring(0, lastIndex) + "_" + new_count.toString());
        }
    })

    $("#form_id_" + new_count.toString()).attr("value", new_count.toString())

    $("#org_format_form_ul_" + old_count.toString()).attr("id", "org_format_form_ul_" + new_count.toString())
    $("#ex_format_form_ul_" + old_count.toString()).attr("id", "ex_format_form_ul_" + new_count.toString())
    $("#genre_form_ul_" + old_count.toString()).attr("id", "genre_form_ul_" + new_count.toString())
    $("#categories_form_ul_" + old_count.toString()).attr("id", "categories_form_ul_" + new_count.toString())

    $("#distri_heading_" + old_count.toString()).attr("id", "distri_heading_" + new_count.toString())
    $("#please_list_heading_" + old_count.toString()).attr("id", "please_list_heading_" + new_count.toString())

    check_preview_format_(old_count, new_count);

    change_check_screening_history_upload(old_count, new_count);  
    
    change_check_still_upload(old_count, new_count)

    check_filmmaker_section(old_count, new_count)

    check_distributor_(old_count, new_count);

    $("#form_entry_" + old_count.toString()).attr("id", "form_entry_" + new_count.toString())

    $("#form_entry_" + new_count.toString()).find('.subtitle').html("Film Entry #" + new_count.toString())

    $("#vimeo_link_section_" + old_count.toString()).attr('id', "vimeo_link_section_" + new_count.toString())

    // if ($("input[type=radio][name=preview_format_" + new_count.toString() + "]").val() !== "vimeo_link") {
    //     $("#vimeo_link_section_" + new_count.toString()).hide();
    // }
}

function make_film_entry(entry_count) {

    $(".forms").append("<div id='form_entry_" + entry_count.toString() + "' class='form_entry'><div class='spacer_with_bar'></div></div>")

    $("#form_entry_" + entry_count.toString()).last().append("<input type='text' class='form_id' name='form_id_" + entry_count.toString() + "' id='form_id_" + entry_count.toString() + "' value='" + entry_count.toString() + "'></input>")

    $("#form_id_" + entry_count.toString()).hide();

    $("#form_entry_" + entry_count.toString()).append("<div class='table_title'><div class='subtitle'></div></div>")
    $(".subtitle").last().append("Film Entry #" + entry_count.toString())

    $("#form_entry_" + entry_count.toString()).append("<div class='spacer'></div>")

    $("#form_entry_" + entry_count.toString()).append("<div class='film_form_table'></div>")

    $(".film_form_table").last().append("<div class='film_form_row_row'></div>")
    $(".film_form_row_row").last().append("<div class='legend'>optional field <b>*</b></div>")

    // Film Title
    left_entry_form_text(entry_count, "film_title", "Film Title");

    // Length
    left_entry_form_text(entry_count, "length", "Length <br/>(min.sec)");

    // Year
    right_entry_form_text(entry_count, "year", "Year");

    // Country
    left_entry_form_text(entry_count, "country", "Country");

    // Language
    right_entry_form_text(entry_count, "language", "Language <br/>(Dialogue and/or Titles)", true);

    // Colour
    $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'><b>Colour</b></div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    $(".acct_type").last().append("<input type='radio' value='colour' id='colour_" + entry_count.toString() + "' name='colour_" + entry_count.toString() + "'></input>")
    $(".acct_type").last().append("<label for='colour_" + entry_count.toString() + "'></label><br>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>colour</b></div>")

    $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'>&#8203;</div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    $(".acct_type").last().append("<input type='radio' value='b/w' id='b_w_" + entry_count.toString() + "' name='colour_" + entry_count.toString() + "'></input>")
    $(".acct_type").last().append("<label for='b_w_" + entry_count.toString() + "'></label>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>b/w</b></div>")
    
    $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'>&#8203;</div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    $(".acct_type").last().append("<input type='radio' value='colour & b/w' id='colour_and_b_w_" + entry_count.toString() + "' name='colour_" + entry_count.toString() + "'></input>")
    $(".acct_type").last().append("<label for='colour_and_b_w_" + entry_count.toString() + "'></label>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>colour and b/w</b></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    // Sound
    $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'><b>Sound</b></div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    $(".acct_type").last().append("<input type='radio' value='sound' id='sound_" + entry_count.toString() + "' name='sound_" + entry_count.toString() + "'></input>")
    $(".acct_type").last().append("<label for='sound_" + entry_count.toString() + "'></label><br>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>sound</b></div>")

    $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'>&#8203;</div>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    $(".acct_type").last().append("<input type='radio' value='silent' id='silent_" + entry_count.toString() + "' name='sound_" + entry_count.toString() + "'></input>")
    $(".acct_type").last().append("<label for='silent_" + entry_count.toString() + "'></label>")
    $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>silent</b></div>")


    // Film Synopsis
    entry_form_textbox(entry_count, "film_synopsis", "Film Synopsis")

    $(".film_form_table").last().append("<div class='request_acct_row_row_sm_spacer'></div>")

    if (entry_count > 1) {

        $(".film_form_table").last().append("<div class='request_acct_row_row'></div>")
        $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
        $(".request_acct_cell_left").last().append("<div class='selection_acct_label_generic'></div>")
        $(".selection_acct_label_generic").last().append("<div class='request_acct_label_text'><b>If filmmaker's information is the same as film entry #1, click here </b></div>")
        $(".request_acct_label_text").last().append("<input type='checkbox' value='yes' id='filmmaker_info_" + entry_count.toString() + "' name='filmmaker_info_" + entry_count.toString() + "'></input>")
        //$(".film_form_table").last().append("<div class='request_acct_row_row_sm_spacer'></div>")

        set_filmmaker_info($('#filmmaker_info_' + entry_count.toString()));
    }


    // $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")


    $(".film_form_table").last().append("<div class='filmmaker_section'></div>")

    // First Name 
    left_entry_form_text_filmmaker(entry_count, "filmmakers_firstname", "Filmmaker's <br/>First Name");

    // Last Name
    right_entry_form_text_filmmaker(entry_count, "filmmakers_lastname", "Filmmaker's <br/>Last Name");

    $(".filmmaker_section").last().append("<div class='request_acct_row_row_sm_spacer'></div>")

    // Email
    left_entry_form_text_filmmaker(entry_count, "filmmakers_email", "Filmmaker's Email");

    $(".filmmaker_section").last().append("<div class='request_acct_row_row_spacer'></div>")

    // Filmmaker's Bio
    entry_form_textbox_filmmaker(entry_count, "filmmakers_bio", "Filmmaker's <br/>Bio")

    $(".filmmaker_section").last().append("<div class='request_acct_row_row_spacer'></div>")

    // Secondary Filmmaker Name(s) 
    left_entry_form_text_filmmaker(entry_count, "sec_filmmakers_name", "Secondary <br/>Filmmaker Name(s)", true);

    $(".filmmaker_section").last().append("<div class='request_acct_row_row_sm_spacer'></div>")

    // Self Identification
    $(".filmmaker_section").last().append("<div class='spacer'></div>")
    $(".filmmaker_section").last().append("<div class='note_table'></div>")
    $(".note_table").last().append("<div class='note_left_spacer'></div>")
    $(".note_table").last().append("<div class='note_content'></div>")
    $(".note_content").last().append("<div class='note_content_table'></div>")
    $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    $(".note_content_table").last().append("<div class='note_content_table_content'></div>")
    $(".note_content_table_content").last().append("This space is for voluntary self-identification. Please note this information will not be posted on our website, it is confidential and for internal use only to aide programmers and researchers in finding works relevant to their festival, programs, classes, research etc. The CFMDC aims also to support work that may not in content explicitly reflect the identities or communities of the filmmaker(s). Self Identification is one of the tools we use to give these works the opportunity to be screened and discussed alongside works that are more explicit in their content.")
    $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    $(".note_table").last().append("<div class='note_right_spacer'></div>")

    $(".filmmaker_section").last().append("<div class='request_acct_row_row_spacer'></div>")

    entry_form_textbox_filmmaker(entry_count, "self_identification", "Self Identification", true)

    $(".filmmaker_section").last().append("<div class='request_acct_row_row_spacer'></div>")

    // $(".filmmaker_section").last().append("<div class='request_acct_row_row_spacer'></div>")


    //Screening history url
    // $(".filmmaker_section").last().append("<div class='request_acct_row_row_sm_spacer'></div>")
    left_entry_form_text_filmmaker(entry_count, "screening_url", "Screening History URL", true);
    $(".filmmaker_section").last().append("<div class='request_acct_row_row_spacer'></div>")

    //Screening history
    $(".film_form_table").last().append("<div class='film_form_row_row'></div>")
    $(".film_form_row_row").last().append("<div class='selection_acct_label'></div>")
    $(".selection_acct_label").last().append("<div class='request_acct_label_text'></div>")
    $(".request_acct_label_text").last().append("<b>Screening History PDF</b> *")
    $(".film_form_row_row").last().append("<div class='request_acct_input'></div>")

    $(".request_acct_input").last().append("<div class='request_acct_input_row'><div class='request_acct_table_row_label'></div></div>")

    $(".request_acct_table_row_label").last().append('<label class="custom-file-upload"><input type="file" id="film-screening-history-file_' + entry_count.toString() + '" name="film-screening-history-file_' + entry_count.toString() + '"/>Upload PDF</label><div class="file-text" id="screening-history-text_' + entry_count.toString() + '">no file currently selected</div>')

    $(".request_acct_input").last().append("<div class='request_acct_upload_info_row'><div class='request_acct_table_row_label'></div></div>")

    $(".request_acct_table_row_label").last().html("PDF only, max size 2MB")

    check_screening_history_upload(entry_count);

    //Stills Upload
    $(".film_form_table").last().append("<div class='film_form_row_row'></div>")
    $(".film_form_row_row").last().append("<div class='selection_acct_label'></div>")
    $(".selection_acct_label").last().append("<div class='request_acct_label_text'></div>")
    $(".request_acct_label_text").last().append("<b>Web Still</b>")
    $(".film_form_row_row").last().append("<div class='request_acct_input'></div>")

    $(".request_acct_input").last().append("<div class='request_acct_input_row'><div class='request_acct_table_row_label'></div></div>")

    $(".request_acct_table_row_label").last().append('<label class="custom-file-upload"><input type="file" id="film-still-file_' + entry_count.toString() + '" name="film-still-file_' + entry_count.toString() + '" />Upload Web Still</label><div class="file-text" id="web-still-text_' + entry_count.toString() + '">no file currently selected</div>')

    $(".request_acct_input").last().append("<div class='request_acct_upload_info_row'><div class='request_acct_table_row_label'></div></div>")

    $(".request_acct_table_row_label").last().html("JPEG/JPG only, min width 380px, min height 265px, max size 1MB")

    check_still_upload(entry_count);

    // $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='selection_acct_label_generic'></div>")
    $(".selection_acct_label_generic").last().append("<div class='request_acct_label_text'>Please submit a Vimeo password protected link to your preview: </div><br/>")

    // Preview Format
    // $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'><b>Preview Format</b></div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    // $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    // $(".acct_type").last().append("<input type='radio' value='blu ray' id='blu_ray_" + entry_count.toString() + "' name='preview_format_" + entry_count.toString() + "'></input>")
    // $(".acct_type").last().append("<label for='blu_ray_" + entry_count.toString() + "'></label><br>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>blu ray</b></div>")

    // $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'>&#8203;</div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    // $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    // $(".acct_type").last().append("<input type='radio' value='dvd' id='dvd_" + entry_count.toString() + "' name='preview_format_" + entry_count.toString() + "'></input>")
    // $(".acct_type").last().append("<label for='dvd_" + entry_count.toString() + "'></label>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>dvd</b></div>")
    
    // $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'>&#8203;</div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    // $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    // $(".acct_type").last().append("<input type='radio' value='digital file' id='digital_file_" + entry_count.toString() + "' name='preview_format_" + entry_count.toString() + "'></input>")
    // $(".acct_type").last().append("<label for='digital_file_" + entry_count.toString() + "'></label>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>digital file</b></div>")

    // $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'>&#8203;</div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    // $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    // $(".acct_type").last().append("<input type='radio' value='drive to be mailed' id='drive_to_be_mailed_" + entry_count.toString() + "' name='preview_format_" + entry_count.toString() + "'></input>")
    // $(".acct_type").last().append("<label for='drive_to_be_mailed_" + entry_count.toString() + "'></label>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>drive to be mailed</b></div>")

    // $(".film_form_table").last().append("<div class='request_acct_film_row'></div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_heading_film'>&#8203;</div>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label'></div>")
    // $(".request_acct_type_label").last().append("<div class='acct_type'></div>")
    // $(".acct_type").last().append("<input type='radio' value='vimeo' id='vimeo_" + entry_count.toString() + "' name='preview_format_" + entry_count.toString() + "'></input>")
    // $(".acct_type").last().append("<label for='vimeo_" + entry_count.toString() + "'></label>")
    // $(".request_acct_film_row").last().append("<div class='request_acct_type_label_text'><b>vimeo password protected link</b></div>")

    // check_preview_format(entry_count);

    // $(".film_form_table").last().append("<div class='request_acct_row_sm_spacer'></div>")

    // vimeo link
    $(".film_form_table").last().append("<div class='request_acct_row_row' id='vimeo_link_section_" + entry_count.toString() + "'></div>")
    // $("#vimeo_link_section_" + entry_count.toString()).hide()
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
    $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Vimeo Link</b></div>")
    $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
    $(".request_acct_input_large").last().append("<input type='text' id='vimeo_link_" + entry_count.toString() + "' name='vimeo_link_" + entry_count.toString() + "'>")
    $(".request_acct_input_large").last().append("<div class='border_line'></div>")

    $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

    // vimeo password
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_right' id='vimeo_password_section'></div>")
    $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
    $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>Vimeo Password</b></div>")
    $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
    $(".request_acct_input_large").last().append("<input type='text' id='vimeo_password_" + entry_count.toString() + "' name='vimeo_password_" + entry_count.toString() + "'>")
    $(".request_acct_input_large").last().append("<div class='border_line'></div>")

    // $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    // $(".film_form_table").last().append("<div class='note_table'></div>")
    // $(".note_table").last().append("<div class='note_left_spacer'></div>")
    // $(".note_table").last().append("<div class='note_content'></div>")
    // $(".note_content").last().append("<div class='note_content_table'></div>")
    // $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    // $(".note_content_table").last().append("<div class='note_content_table_content'></div>")
    // $(".note_content_table_content").last().append("<b>If you are submitting your preview as dvd/blu ray/external drive, please send it to:</b></br></br>")
    // $(".note_content_table_content").last().append("Membership & Aquisitions</br>")
    // $(".note_content_table_content").last().append("401 Richmond St. W., Suite 245</br>")
    // $(".note_content_table_content").last().append("Toronto, Ontario, Canada, M5V 3A8</br></br>")
    // $(".note_content_table_content").last().append("Please Note: Preview dvds and blu rays will not be returned</br></br>")
    // $(".note_content_table_content").last().append("<b>You can expect a response in 4-8 weeks</b></br>")
    // $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    // $(".note_table").last().append("<div class='note_right_spacer'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='selection_acct_label_generic'></div>")
    $(".selection_acct_label_generic").last().append("<div class='request_acct_label_text'>Please select as many formats as necessary: </div>")

    // Original Format
    $(".film_form_table").last().append("<div class='film_form_row_row'></div>")
    $(".film_form_row_row").last().append("<div class='selection_acct_label'></div>")
    $(".selection_acct_label").last().append("<div class='request_acct_label_text'></div>")
    $(".request_acct_label_text").last().append("<b>Original <br/>Format</b>")
    $(".film_form_row_row").last().append("<div class='request_acct_input'></div>")

    $(".request_acct_input").last().append("<div class='genre_selection_container'></div>")
    $(".genre_selection_container").last().append("<div class='genre_input_table'></div>")

    $(".genre_input_table").last().append("<div class='genre_input_row'></div>")
    $(".genre_input_row").last().append('<ul class="search_list" id="org_format_form_ul_' + entry_count.toString() + '"></ul>')

    $("#org_format_form_ul_" + entry_count.toString()).append(build_org_format_list_form(categories_genre_obj['format_form'], entry_count))

    // Exhibition Format
    $(".film_form_table").last().append("<div class='film_form_row_row'></div>")
    $(".film_form_row_row").last().append("<div class='selection_acct_label'></div>")
    $(".selection_acct_label").last().append("<div class='request_acct_label_text'></div>")
    $(".request_acct_label_text").last().append("<b>Exhibition <br/>Format</b>")
    $(".film_form_row_row").last().append("<div class='request_acct_input'></div>")

    $(".request_acct_input").last().append("<div class='genre_selection_container'></div>")
    $(".genre_selection_container").last().append("<div class='genre_input_table'></div>")

    $(".genre_input_table").last().append("<div class='genre_input_row'></div>")
    $(".genre_input_row").last().append('<ul class="search_list" id="ex_format_form_ul_' + entry_count.toString() + '"></ul>')

    $("#ex_format_form_ul_" + entry_count.toString()).append(build_ex_format_list_form(categories_genre_obj['format_form'], entry_count))

    $(".film_form_table").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='selection_acct_label_generic'></div>")
    $(".selection_acct_label_generic").last().append("<div class='request_acct_label_text'>Please select as many categories as necessary: </div>")

    // Genre
    $(".film_form_table").last().append("<div class='film_form_row_row'></div>")
    $(".film_form_row_row").last().append("<div class='selection_acct_label'></div>")
    $(".selection_acct_label").last().append("<div class='request_acct_label_text'></div>")
    $(".request_acct_label_text").last().append("<b>Genre</b>")
    $(".film_form_row_row").last().append("<div class='request_acct_input'></div>")

    $(".request_acct_input").last().append("<div class='genre_selection_container'></div>")
    $(".genre_selection_container").last().append("<div class='genre_input_table'></div>")

    $(".genre_input_table").last().append("<div class='genre_input_row'></div>")
    $(".genre_input_row").last().append('<ul class="search_list" id="genre_form_ul_' + entry_count.toString() + '"></ul>')

    $("#genre_form_ul_" + entry_count.toString()).append(build_genre_list_form(categories_genre_obj['genre_form'], entry_count))

    //Keywords
    $(".film_form_table").last().append("<div class='film_form_row_row'></div>")
    $(".film_form_row_row").last().append("<div class='selection_acct_label'></div>")
    $(".selection_acct_label").last().append("<div class='request_acct_label_text'></div>")
    $(".request_acct_label_text").last().append("<b>Keywords</b>")

    $(".film_form_row_row").last().append("<div class='request_acct_input'></div>")

    $(".request_acct_input").last().append("<div class='categories_selection_container'></div>")
    $(".categories_selection_container").last().append("<div class='categories_input_table'></div>")

    $(".categories_input_table").last().append("<div class='categories_input_row'></div>")
    $(".categories_input_row").last().append('<ul class="search_list" id="categories_form_ul_' + entry_count.toString() + '"></ul>')

    $("#categories_form_ul_" + entry_count.toString()).append(build_category_list_form(categories_genre_obj['category_form'], entry_count))

    // $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    // Already being distributed
    $(".film_form_table").last().append("<div class='spacer'></div>")
    $(".film_form_table").last().append("<div class='note_table'></div>")
    $(".note_table").last().append("<div class='note_left_spacer'></div>")
    $(".note_table").last().append("<div class='note_content'></div>")
    $(".note_content").last().append("<div class='note_content_table'></div>")
    $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    $(".note_content_table").last().append("<div class='note_content_table_content'></div>")
    $(".note_content_table_content").last().append("<div id='distri_heading_" + entry_count.toString() +"'><b>Is your title in distribution with any other organizations?</b></div><br/>")
    $(".note_content_table").last().append("<div class='note_content_table_content'></div>")
    $(".note_content_table_content").last().append("<div><div class='distribution'><input type='radio' value='yes' id='yes_distri_" + entry_count.toString() +"' name='distri_" + entry_count.toString() +"'/><label for='yes_distri_" + entry_count.toString() + "'></label></div>&nbsp;<b>Yes</b></div>")
    $(".note_content_table_content").last().append("<div><div class='distribution'><input type='radio' value='no' id='no_distri_" + entry_count.toString() +"' name='distri_" + entry_count.toString() +"'/><label for='no_distri_" + entry_count.toString() + "'></label></div>&nbsp;<b>No</b></div>")
    $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    $(".note_content_table").last().append("<div class='note_content_table_content'></div>")
    $(".note_content_table_content").last().append("<div class='please_list'><div id='please_list_heading_" + entry_count.toString() +"'><b>Please list:</b></div><br/></div>")
    $(".please_list").last().append("<input type='text' id='distribution_list_" + entry_count.toString() + "' name='distribution_list_" + entry_count.toString() + "'/><div class='note_content_horz_spacer'></div>")
    $(".please_list").last().hide()
    $(".note_table").last().append("<div class='note_right_spacer'></div>") 

    check_distributor(entry_count)

    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    // Note on copyrights
    $(".film_form_table").last().append("<div class='note_table'></div>")
    $(".note_table").last().append("<div class='note_left_spacer'></div>")
    $(".note_table").last().append("<div class='note_content'></div>")
    $(".note_content").last().append("<div class='note_content_table'></div>")
    $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    $(".note_content_table").last().append("<div class='note_content_table_content'></div>")
    $(".note_content_table_content").last().append("<b>A Note On Rights:</b></br></br>")
    $(".note_content_table_content").last().append("The following all have protection under copyright or trade-mark law:</br>")
    $(".note_content_table_content").last().append("<ul></ul></br>")
    $("ul").last().append("<li>Music (includes both the song and the performer)</li>")
    $("ul").last().append("<li>Sound (if from an identifiable source e.g. sound from a radio program or TV show)</li>")
    $("ul").last().append("<li>Film footage</li>")
    $("ul").last().append("<li>TV footage</li>")
    $("ul").last().append("<li>\"Found\" or archival footage</li>")
    $("ul").last().append("<li>Photographs, including images of fine art (e.g. a painting by Dali, a statue by Michelangelo)</li>")
    $("ul").last().append("<li>Poems, text, quotations from written material</li>")
    $("ul").last().append("<li>Newspaper headlines, magazine covers, posters</li>")
    $("ul").last().append("<li>Corporate logos (on clothing, computers, food packages, store signs, etc.)</li>")
    $(".note_content_table_content").last().append("<b>If your film contains any of the above for which you have not obtained broadcast rights, click here </b>")
    $(".note_content_table_content").last().append("<input type='checkbox' value='yes' id='rights_" + entry_count.toString() + "' name='rights_" + entry_count.toString() + "'></input></br></br>")
    $(".note_content_table_content").last().append("For more details, guidelines on Canadian copyright are available on the Canadian Intellectual Property Office website at <a target='_blank' href='http://www.cipo.gc.ca'>www.cipo.gc.ca</a>. U.S. copyright information is available at <a target='_blank' href='http://www.copyright.gov'>www.copyright.gov</a>.</br>")
    $(".note_content_table").last().append("<div class='note_content_horz_spacer'></div>")
    $(".note_table").last().append("<div class='note_right_spacer'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")
    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left_button'></div>")

    $(".request_acct_cell_left_button").last().append("<button type='button' id='add_film_form_" + entry_count.toString() + "'><span>Add Another Film Entry</span></button>")

    add_film_form($("#add_film_form_" + entry_count.toString()));

    $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")

    $(".request_acct_row_row").last().append("<div class='request_acct_cell_right_button'></div>")

    if (entry_count > 1) {
        $(".request_acct_cell_right_button").last().append("<button type='button' id='remove_film_form_" + entry_count.toString() + "'><span>Remove Current Film Entry</span></button>")
        remove_film_form($("#remove_film_form_" + entry_count.toString()))
    }
}

function check_distributor_(old_count, new_count) {
    $("input[type=radio][name=distri_" + old_count.toString() + "]").off('change');
    check_distributor(new_count);
}

function check_distributor(entry_count) {
    $("input[type=radio][name=distri_" + entry_count.toString() + "]").on('change', {entry_count: entry_count}, check_distribution_handler) 
}

function check_distribution_handler(e) {
    if ($(this).val() === 'yes') {
        $(this).parent().parent().parent().parent().find(".please_list").show()
    }
    else {
        $(this).parent().parent().parent().parent().find(".please_list").hide()
    }
}

function is_cfmdc_member(user_name) {
    split_string = user_name.split("_")
    
    if (split_string.length !== 3) {
        return false;
    }

    if (split_string[0] !== "cfmdc" || split_string[1] !== "member" || isNaN(split_string[2])) {
        return false;
    }

    return true;
}

function filmmaker_info_handler() {
    form_obj = $(this).parent().parent().parent().parent().parent()
    if($(this).is(':checked')) {
        form_obj.find(".filmmaker_section").hide()
    }
    else {
        form_obj.find(".filmmaker_section").show()
    }
}

function set_filmmaker_info(checkbox_obj) {
    checkbox_obj.on('change', filmmaker_info_handler);
}

function add_film_form(button_obj) {
    button_obj.click(function(){
        if (logged_in == 1 || parseInt($("#form_count").val()) < 5) {
            make_film_entry(film_form_count);
        }
    });

    if (logged_in == 1 || parseInt($("#form_count").val()) < 5) {
        $("#form_count").attr("value", film_form_count.toString())
        film_form_count++;
    }
}

function remove_film_form(button_obj) {
    button_obj.click(function(){
        $(this).off("click");
        form_number = $(this).parent().parent().parent().parent().find(".form_id").attr('value');
        
        $('#filmmaker_info_' + form_number).off('change');
        $("#film-screening-history-file_" + form_number).off("change");
        $("#film-still-file_" + form_number).off("change");
        $("input[type=radio][name=preview_format_" + form_number + "]").off('change');
        $("input[type=radio][name=distri_" + form_number + "]").off('change');

        $("#form_entry_" + form_number).remove();

        form_count = parseInt($("#form_count").attr("value"));

        if (form_count - 1 > 1) {
            for (i=parseInt(form_number); i<form_count; i++) {
                change_id_count(i + 1, i);
            }
        }

        $("#form_count").attr("value", (form_count - 1).toString())

        film_form_count--;
    });
}

function entry_form_textbox_filmmaker (entry_count, name, title, not_optional=false) {
    $(".filmmaker_section").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='selection_acct_label'></div>")
    if (not_optional) {
        $(".selection_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b> *</div>")
    }
    else {
        $(".selection_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b></div>")
    }
    $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_box'></div>")
    $(".request_acct_input_box").last().append("<textarea form='film-form' id='" + name + "_" + entry_count.toString() + "' name='" + name + "_" + entry_count.toString() + "'></textarea>")
    $(".request_acct_input_box").last().append("<div class='border_line'></div>")

    $(".filmmaker_section").last().append("<div class='request_acct_row_row_sm_spacer'></div>")
}

function entry_form_textbox (entry_count, name, title, not_optional=false) {
    $(".film_form_table").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='selection_acct_label'></div>")
    if (not_optional) {
        $(".selection_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b> *</div>")
    }
    else {
        $(".selection_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b></div>")
    }
    $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_box'></div>")
    $(".request_acct_input_box").last().append("<textarea form='film-form' type='textarea' id='" + name + "_" + entry_count.toString() + "' name='" + name + "_" + entry_count.toString() + "'></textarea>")
    $(".request_acct_input_box").last().append("<div class='border_line'></div>")

    $(".film_form_table").last().append("<div class='request_acct_row_row_spacer'></div>")
}

function left_entry_form_text_filmmaker (entry_count, name, title, not_optional=false) {
    $(".filmmaker_section").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
    if (not_optional) {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b> *</div>")
    }
    else {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b></div>")
    }
    $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
    $(".request_acct_input_large").last().append("<input type='text' id='" + name + "_" + entry_count.toString() + "' name='" + name + "_" + entry_count.toString() + "'>")
    $(".request_acct_input_large").last().append("<div class='border_line'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")
}

function right_entry_form_text_filmmaker (entry_count, name, title, not_optional=false) {
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")
    $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
    if (not_optional) {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b> *</div>")
    }
    else {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b></div>")
    }
    $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
    $(".request_acct_input_large").last().append("<input type='text' id='" + name + "_" + entry_count.toString() + "' name='" + name + "_" + entry_count.toString() + "'>")
    $(".request_acct_input_large").last().append("<div class='border_line'></div>")
}

function left_entry_form_text (entry_count, name, title, not_optional=false) {
    $(".film_form_table").last().append("<div class='request_acct_row_row'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_left'></div>")
    $(".request_acct_cell_left").last().append("<div class='request_acct_label'></div>")
    if (not_optional) {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b> *</div>")
    }
    else {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b></div>")
    }
    $(".request_acct_cell_left").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
    $(".request_acct_input_large").last().append("<input type='text' id='" + name + "_" + entry_count.toString() + "' name='" + name + "_" + entry_count.toString() + "'>")
    $(".request_acct_input_large").last().append("<div class='border_line'></div>")
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_spacer'></div>")
}

function right_entry_form_text (entry_count, name, title, not_optional=false) {
    $(".request_acct_row_row").last().append("<div class='request_acct_cell_right'></div>")
    $(".request_acct_cell_right").last().append("<div class='request_acct_label'></div>")
    if (not_optional) {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b> *</div>")
    }
    else {
        $(".request_acct_label").last().append("<div class='request_acct_label_text'><b>" + title + "</b></div>")
    }
    $(".request_acct_cell_right").last().append("<div class='request_acct_input'></div>")
    $(".request_acct_input").last().append("<div class='request_acct_input_large'></div>")
    $(".request_acct_input_large").last().append("<input type='text' id='" + name + "_" + entry_count.toString() + "' name='" + name + "_" + entry_count.toString() + "'>")
    $(".request_acct_input_large").last().append("<div class='border_line'></div>")
}

function check_preview_format_(old_count, new_count) {
    //$("input[type=radio][name=preview_format_" + old_count.toString() + "]").off('change');
    $("#vimeo_link_section_"+ old_count.toString()).attr("id", "vimeo_link_section_"+ new_count.toString())
    //check_preview_format(new_count);
}

function check_filmmaker_section(old_count, new_count) {
    $('#filmmaker_info_' + old_count.toString()).off('change');
    set_filmmaker_info($('#filmmaker_info_' + new_count.toString()));
}

function check_preview_format_handler(e) {

    entry_count = e.data.entry_count;

    if ($(this).val() === "vimeo") {
        $("#vimeo_link_section_"+ entry_count.toString()).show();
    }
    else {
        $("#vimeo_link_section_"+ entry_count.toString()).hide();
    }
}

function check_preview_format(entry_count) {
    $("input[type=radio][name=preview_format_" + entry_count.toString() + "]").on('change', {entry_count: entry_count}, check_preview_format_handler) 
}

function change_check_screening_history_upload(old_count, new_count) {
    $("#film-screening-history-file_" + old_count.toString()).off("change");
    $("#film-screening-history-file_" + old_count.toString()).attr("id", "film-screening-history-file_" + new_count.toString());
    $("#screening-history-text_" + old_count.toString()).attr("id", "screening-history-text_" + new_count.toString());
    check_screening_history_upload(new_count);
}

function check_screening_history_upload_handler(e) {

    entry_count = e.data.entry_count;
    var file;

    filepath = $(this).val();

    var fileExt = filepath.split('.').pop(); 

    filename = filepath.split('\\').pop(); 

    if (fileExt.toLowerCase() !== "pdf") {
        $(".warning").find(".alert_text_table").html('<div class="normal_text"> <div class="big">The file you\'re attempting to upload is not a PDF. <br/>Please try again.</div>')
        $(".warning").addClass("warning_up")
        reset_file($(this));
        $("#screening-history-text_" + entry_count.toString()).html("no file currently selected");
    }
    else{
        if ((file = this.files[0])) {

            if (file.size > 1048576 * 2) {
                $(".warning").find(".alert_text_table").html('<div class="normal_text"> <div class="big">The image you\'re attempting to upload is larger than 2MB. <br/>Please try again.</div>')
                $(".warning").addClass("warning_up")
                reset_file($(this));
                $("#screening-history-text_" + entry_count.toString()).html("no file currently selected");
            }
            else {
                $("#screening-history-text_" + entry_count.toString()).html(filename);
            }
        }
    }
}

function check_screening_history_upload(entry_count) {

    $("#film-screening-history-file_" + entry_count.toString()).on('change', {entry_count: entry_count}, check_screening_history_upload_handler)
}

function change_check_still_upload(old_count, new_count) {
    $("#film-still-file_" + old_count.toString()).off("change");
    $("#film-still-file_" + old_count.toString()).attr("id", "film-still-file_" + new_count.toString())
    $("#web-still-text_" + old_count.toString()).attr("id", "web-still-text_" + new_count.toString());
    check_still_upload(new_count);
}

function check_still_upload_handler(e) {
    var image, file;

    entry_count = e.data.entry_count;

    _URL = e.data._URL;

    filepath = $(this).val();

    if (!filepath) {
        $("#web-still-text").html("no file currently selected");
        return
    }

    var fileExt = filepath.split('.').pop(); 

    filename = filepath.split('\\').pop(); 

    if (fileExt.toLowerCase() !== "jpg" && fileExt.toLowerCase() !== "jpeg") {
        $(".warning").find(".alert_text_table").html('<div class="normal_text"> <div class="big">The image you\'re attempting to upload is not a JPEG/JPG. <br/>Please try again.</div>')
        $(".warning").addClass("warning_up")
        reset_file($(this))
        $("#web-still-text").html("no file currently selected");
    }
    else{
        if ((file = this.files[0])) {

            if (file.size > 1048576) {
                $(".warning").find(".alert_text_table").html('<div class="normal_text"> <div class="big">The image you\'re attempting to upload is larger than 1MB. <br/>Please try again.</div>')
                $(".warning").addClass("warning_up")
                reset_file($(this))
                $("#web-still-text_" + entry_count.toString()).html("no file currently selected");
            }
            else {
           
                file_obj = $(this).attr('id');

                image = new Image();

                image.src = _URL.createObjectURL(file);
                
                image.onload = function() {
                    if (this.width < 380 || this.height < 265) {
                        $(".warning").find(".alert_text_table").html('<div class="normal_text"> <div class="big">The image you\'re attempting to upload has a width smaller than 380px or a height smaller than 265px. <br/> Please try again.</div>')
                        $(".warning").addClass("warning_up")
                        reset_file($("#" + file_obj))
                        $("#web-still-text_" + entry_count.toString()).html("no file currently selected");
                    }
                    else {
                        $("#web-still-text_" + entry_count.toString()).html(filename);
                    }
                };
                
            }
        }
    }
}

function reset_file(obj) {
    obj.wrap('<form>').closest('form').get(0).reset();
    obj.unwrap();
}

function check_still_upload(entry_count) {

    var _URL = window.URL || window.webkitURL;

    $("#film-still-file_" + entry_count.toString()).on('change', {entry_count: entry_count, _URL: _URL}, check_still_upload_handler)
}

function build_org_format_list_form(formats, count) {
    ul_str = ""

    for($i=0; $i<formats.length; $i++) {
        li_str = '<li class="search_list_entry_genre">\
                    <input type="checkbox" value="' + formats[$i][0] + '" name="search-org-format_' + count + '[]" id="search-org-format-' + ($i+1) + '_' + count + '"/>\
                    <label for="search-org-format-' + ($i+1) + '_' + count + '">' + formats[$i][0].toLowerCase() +'</label>\
                </li>'
        ul_str += li_str
    }

    return ul_str
}

function build_ex_format_list_form(formats, count) {
    ul_str = ""

    for($i=0; $i<formats.length; $i++) {
        li_str = '<li class="search_list_entry_genre">\
                    <input type="checkbox" value="' + formats[$i][0] + '" name="search-ex-format_' + count + '[]" id="search-ex-format-' + ($i+1) + '_' + count + '"/>\
                    <label for="search-ex-format-' + ($i+1) + '_' + count + '">' + formats[$i][0].toLowerCase() +'</label>\
                </li>'
        ul_str += li_str
    }

    return ul_str
}

function build_genre_list_form(genres, count) {
    ul_str = ""

    for($i=0; $i<genres.length; $i++) {
        li_str = '<li class="search_list_entry_genre">\
                    <input type="checkbox" value="' + genres[$i][0] + '" name="search-genre_' + count + '[]" id="search-genre-' + ($i+1) + '_' + count + '"/>\
                    <label for="search-genre-' + ($i+1) + '_' + count + '">' + genres[$i][0].toLowerCase() +'</label>\
                </li>'
        ul_str += li_str
    }

    return ul_str
}

function build_category_list_form(categories, count) {
    ul_str = ""

    for($i=0; $i<categories.length; $i++) {
        li_str = '<li class="search_list_entry_category">\
                    <input type="checkbox" value="' + categories[$i][0] + '" name="search-category_' + count + '[]" id="search-category-' + ($i+1) + '_' + count + '"/>\
                    <label for="search-category-' + ($i+1) + '_' + count + '">' + categories[$i][0].toLowerCase() +'</label>\
                </li>'
        ul_str += li_str
    }

    return ul_str
}

function recaptchaCallback() {
    recaptcha_checked = true;
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};



function fill_acct_request(with_opt=true) {
    fieldnames = ["firstname", "address", "lastname", "lastname", 
    "city_town", "city_town", "city_town", "country_", 
    "province_state", "phone", "postal_code"]

    for (i=0; i<fieldnames.length; i++) {
        fill_field(fieldnames[i], "test");
    }

    fill_field("email", "test@test.com");

    if (with_opt) {
        fill_field("organization", "test");
    }
}

function checkFields() {

    if (logged_in != 1) {

        // check acct request area
        acct_request_fields = ["firstname", "address", "lastname", 
        "city_town", "city_town", "city_town", "country_", "province_state", 
        "phone", "postal_code", "email"];

        is_complete = true;

        for (i=0; i<acct_request_fields.length; i++) {
            field_value = $("input[name='" + acct_request_fields[i] + "']").val();
            is_complete = is_complete &&  Boolean(field_value);
            highlight_field_text(acct_request_fields[i], field_value)
        }


        if ($("input[name='email']").val()) {
            emailCheck = isValidEmailAddress($("input[name='email']").val());
            is_complete = is_complete &&  Boolean(emailCheck);
            highlight_field_text('email', emailCheck)
        }

    }

    else {

        is_complete = true;
    }

    //check form

    //get number of forms

    form_count = parseInt($("#form_count").val())

    for (i=1; i<=form_count; i++) {
        check_result = check_form(i)
        is_complete = is_complete &&  Boolean(check_result); 
    }

    // recaptcha
    is_complete = is_complete &&  Boolean(recaptcha_checked);

    // if($("input:radio[name=acct_type]").is(":checked")){
    //     acct_type = true
    // }

    // if (firstname && lastname && phone && email && isValidEmailAddress(email) && address && city_town && province_state && country && postal_code && acct_type && recaptcha_checked) {
    //     return true;
    // }
    // else {
    //     return false;

    return is_complete;
}

function check_form (form_number) {
    form_text_fields = ["film_title_", "length_", "year_", "country_"]

    is_complete_ = true;

    for(j=0; j<form_text_fields.length; j++) {
        field_value = $("input[name='" + form_text_fields[j] + form_number.toString() + "']").val();
        is_complete_ = is_complete_ && field_value;
        highlight_field_text(form_text_fields[j] + form_number.toString(), field_value)
    }

    // colour
    is_complete_ = check_radio_form("colour_", form_number) && is_complete_

    // sound
    is_complete_ = check_radio_form("sound_", form_number) && is_complete_

    // film synopsis
    film_synopsis = $("textarea[name='film_synopsis_" + form_number.toString() + "']").val();
    is_complete_ = is_complete_ && film_synopsis;
    highlight_field_textbox("film_synopsis_" + form_number.toString(), film_synopsis)


    // filmmaker_info

    if(!$("input[name='filmmaker_info_" + form_number.toString() + "']").is("checked")) {
        form_text_fields = ["filmmakers_firstname_", "filmmakers_lastname_", "filmmakers_email_"]
        for(j=0; j<form_text_fields.length; j++) {
            field_value = $("input[name='" + form_text_fields[j] + form_number.toString() + "']").val();
            is_complete_ = is_complete_ && field_value;
            highlight_field_text(form_text_fields[j] + form_number.toString(), field_value)
        }

        if ($("input[name='filmmakers_email_" + form_number.toString() + "']").val()) {
            emailCheck = isValidEmailAddress($("input[name='filmmakers_email_" + form_number.toString() + "']").val());
            is_complete_ = is_complete_ && emailCheck;
            highlight_field_text("filmmakers_email_" + form_number.toString(), emailCheck)
        }

        filmmaker_bio = $("textarea[name='filmmakers_bio_" + form_number.toString() + "']").val();
        is_complete_ = is_complete_ && filmmaker_bio;
        highlight_field_textbox("filmmakers_bio_" + form_number.toString(), filmmaker_bio)
    }

    // web still
    web_still = $("input[name='film-still-file_" + form_number.toString() + "']").val();
    is_complete_ = is_complete_ && web_still;
    highlight_field_file("film-still-file_" + form_number.toString(), web_still)

    // preview format
    // is_complete_ = check_radio_form("preview_format_", form_number) && is_complete_

    // original format
    is_complete_ = check_checkbox_form("search-org-format_", form_number) && is_complete_

    // exhibition format
    is_complete_ = check_checkbox_form("search-ex-format_", form_number) && is_complete_

    // genre
    is_complete_ = check_checkbox_form("search-genre_", form_number) && is_complete_

    // keywords
    is_complete_ = check_checkbox_form("search-category_", form_number) && is_complete_

    // if ($("input[id='vimeo_" + form_number.toString() + "']").is(":checked")) {
    form_text_fields = ["vimeo_link_", "vimeo_password_"]
    for(j=0; j<form_text_fields.length; j++) {
        field_value = $("input[name='" + form_text_fields[j] + form_number.toString() + "']").val();
        is_complete_ = is_complete_ && field_value;
        highlight_field_text(form_text_fields[j] + form_number.toString(), field_value)
    }
    // }
    // else {
    //     form_text_fields = ["vimeo_link_", "vimeo_password_"]
    //     for(j=0; j<form_text_fields.length; j++) {
    //         $("input[name='" + form_text_fields[j] + form_number.toString() + "']").parent().parent().parent().find('.request_acct_label_text').removeClass("request_acct_label_text_alert");
    //     }
    // }

    // distribution list
    is_complete_ = check_distribution_form(form_number) && is_complete_

    return is_complete_;
}

function check_distribution_form(form_number) {
    checked = false
    $("input:radio[name='distri_" + form_number.toString() + "']").each(function() {
        if ($(this).is(":checked")) {
            checked = true;
        }
    })

    if (checked) {
        $("#distri_heading_" + form_number.toString()).removeClass("make_red")

        if($("input:radio[id='yes_distri_" + form_number.toString() + "']").is(":checked")) {

            if (!$("#distribution_list_" + form_number.toString()).val()) {
                $("#please_list_heading_" + form_number.toString()).addClass("make_red")
                checked = false
            }

            else {
                $("#please_list_heading_" + form_number.toString()).removeClass("make_red")
                checked = true
            }

        }
    }
    else {
        $("#distri_heading_" + form_number.toString()).addClass("make_red")
    }


    return checked
}

function check_checkbox_form (name, form_number) {
    checked = false;
    $("input:checkbox[name='" + name + form_number.toString() + "[]']").each(function() {
        if ($(this).is(":checked")) {
            checked = true;
        }
    })

    highlight_field_checkbox(name + form_number.toString() + "[]", checked)
    return checked
}

function check_radio_form(name, form_number) {
    checked = false;

    $("input:radio[name='" + name + form_number.toString() + "']").each(function() {
        if ($(this).is(":checked")) {
            checked = true;
        }
    })

    highlight_field_radio(name + form_number.toString(), checked)
    return checked
}

function highlight_field_checkbox(name, boolean) {
    if (boolean) {
        $("input[name='" + name + "']").parent().parent().parent().parent().parent().parent().parent().find('.request_acct_label_text').removeClass("request_acct_label_text_alert");
    }
    else {
        $("input[name='" + name + "']").parent().parent().parent().parent().parent().parent().parent().find('.request_acct_label_text').addClass("request_acct_label_text_alert");
    }
}

function highlight_field_radio(name, boolean) {
    if (boolean) {
        $("input[name='" + name + "']").parent().parent().parent().find('.request_acct_type_heading_film').removeClass("request_acct_label_text_alert");
    }
    else {
        $("input[name='" + name + "']").parent().parent().parent().find('.request_acct_type_heading_film').addClass("request_acct_label_text_alert");
    }
}

function highlight_field_textbox(name, boolean) {
    if (boolean) {
        $("textarea[name='" + name + "']").parent().parent().parent().find('.request_acct_label_text').removeClass("request_acct_label_text_alert");
    }
    else {
        $("textarea[name='" + name + "']").parent().parent().parent().find('.request_acct_label_text').addClass("request_acct_label_text_alert");
    }
}

function highlight_field_file(name, boolean) {
    if (boolean) {
        $("input[name='" + name + "']").parent().parent().parent().parent().parent().find('.request_acct_label_text').removeClass("request_acct_label_text_alert");
    }
    else {
        $("input[name='" + name + "']").parent().parent().parent().parent().parent().find('.request_acct_label_text').addClass("request_acct_label_text_alert");
    }
}

function highlight_field_text(name, boolean) {
    if (boolean) {
        $("input[name='" + name + "']").parent().parent().parent().find('.request_acct_label_text').removeClass("request_acct_label_text_alert");
    }
    else {
        $("input[name='" + name + "']").parent().parent().parent().find('.request_acct_label_text').addClass("request_acct_label_text_alert");
    }
}

function fill_form(form_number, with_opt=true, vimeo_on=false) {
    form_fields = ["film_title_", "length_", "year_", "country_", "film_synopsis_", "filmmakers_firstname_", "filmmakers_lastname_", "filmmakers_bio_"]

    for (i=0; i<fieldnames.length; i++) {
        fill_field(form_fields[i] + form_number.toString(), "test");
    }

    fill_radio("colour_" + form_number.toString())
    fill_radio("silent_" + form_number.toString())

    // if (vimeo_on) {
    //     fill_radio("vimeo_" + form_number.toString())
    //     fill_field("vimeo_link_" + form_number.toString(), "test");
    //     fill_field("vimeo_password_" + form_number.toString(), "test");
    // }
    // else {
    //     fill_radio("blu_ray_" + form_number.toString())
    // }

    fill_radio("search-org-format-1_" + form_number.toString())
    fill_radio("search-ex-format-9_" + form_number.toString())
    fill_radio("search-genre-2_" + form_number.toString())
    fill_radio("search-category-24_" + form_number.toString())

    //fill_field("film-still-file_" + form_number.toString(), "test");

    fill_textarea("film_synopsis_" + form_number.toString(), "test");
    fill_textarea("filmmakers_bio_" + form_number.toString(), "test");

    fill_field("filmmakers_email_" + form_number.toString(), "test@test.com");

    if (with_opt) {
        //fill_field("film-screening-history-file_" + form_number.toString(), "test");
        fill_field("language_" + form_number.toString(), "test");
        fill_field("sec_filmmakers_name_" + form_number.toString(), "test");
        fill_textarea("self_identification_" + form_number.toString(), "test");
    }
}

function fill_radio(name) {
    $("#" + name).prop('checked', true)
}

function fill_field(name, value) {
    $("input[name='" + name + "']").val(value)
}

function fill_textarea(name, value) {
    $("textarea[name='" + name + "']").val(value)
}