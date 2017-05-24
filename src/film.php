<?php
require 'src/film_json.php';
require 'src/getworkforpurchase.php';

$purchase_json = getWorkForPurchaseJson($match['params']['film_id']);

$film_json = getFilmJson($match['params']['film_id']);

if ($purchase_json) {
?>
    <link rel="stylesheet" type="text/css" href="<?=$web_host?>css/film_purchase.css">
    <script type="text/javascript">
    json_string = '<?php echo addslashes($purchase_json); ?>'
    if (json_string) {
        film_purchase_obj = JSON.parse('<?php echo addslashes($purchase_json); ?>')
    }
    else {
        film_purchase_obj = '';
    }
    json_string = '<?php echo addslashes($film_json); ?>'
    if (json_string) {
        film_obj = JSON.parse('<?php echo addslashes($film_json); ?>')
    }
    else {
        film_obj = '';
    }
    </script>
    <script src="<?=$web_host?>js/film_purchase.js" type="text/javascript"></script>
    <script src="https://content.jwplatform.com/libraries/2d2HEAIU.js" type="text/javascript"></script>

<?php
}
else {
    
?>

    <link rel="stylesheet" type="text/css" href="<?=$web_host?>css/film.css">
    <script type="text/javascript">
    json_string = '<?php echo addslashes($film_json); ?>'
    if (json_string) {
        film_obj = JSON.parse('<?php echo addslashes($film_json); ?>')
    }
    else {
        film_obj = '';
    }
    </script>
    <script src="<?=$web_host?>js/film.js" type="text/javascript"></script>
    <script src="https://content.jwplatform.com/libraries/2d2HEAIU.js" type="text/javascript"></script>
<?php 
}
?>

<script>
    console.log(film_obj)
    if (film_obj) {
        var el = document.createElement('script');
        el.type = 'application/ld+json';
        el.text = JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            "url": window.location.href,
            "name": film_obj['film_title'] + " | Canadian Filmmakers Distribution Centre",
            "keywords": film_obj['filmmaker_name'] + " " + film_obj['film_title'] + ", " +film_obj['film_title'] + ", " + film_obj['filmmaker_name'] + " " + film_obj['film_title'] + ", " + film_obj['filmmaker_name'] + "CFMDC, " + film_obj['filmmaker_name'] + " " + filmmaker_obj['filmmaker_name'] + "Canadian Filmmakers Distribution Centre" + ", " + film_obj['filmmaker_name'] + " " + film_obj['filmmaker_name'] + "CFMDC, " + filmmaker_obj['filmmaker_name'] + "Canadian Filmmakers Distribution Centre"
        });
        document.querySelector('body').appendChild(el);
    }
</script>