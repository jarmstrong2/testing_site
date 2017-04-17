<?php
require 'src/pages_json.php';
$page_json = getPagesJson(2649);
?>

<link rel="stylesheet" type="text/css" href="<?=$web_host?>css/page.css">
<script type="text/javascript">

json_string = '<?php echo addslashes($page_json); ?>'

if (json_string) {
    page_obj = JSON.parse('<?php echo addslashes($page_json); ?>')
}
else {
    page_obj = ''
}

</script>
<script src="<?=$web_host?>js/rentalshippingreturns.js" type="text/javascript"></script>