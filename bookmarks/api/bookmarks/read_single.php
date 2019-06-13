<?php
// header info - allowing everything for now.
header('Access-Control-Allow-Origin: *');
// header info - expecting json.
header('Content-Type: application/json');

// config and model
include_once '../../config/Database.php';
include_once '../../models/Bookmarks.php';

// database connection
$database = new Database();
$db = $database->connect();

// bookmark info
$bookmark = new Bookmark($db);

$bookmark->bookmark_id = isset($_GET['id']) ? $_GET['id'] : 1;

$bookmark->read_single();

$bookmark_arr = array(
    'bookmark_id' => $bookmark->bookmark_id,
    'parent_id' => $bookmark->parent_id,
    'title' => $bookmark->title,
    'url' => html_entity_decode($bookmark->url),
    'create_date' => $bookmark->create_date
);

echo json_encode($bookmark_arr);