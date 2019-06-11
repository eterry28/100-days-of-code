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
$bookmark = new Bookmarks($db);
$result = $bookmark->read();
$row_count = $result->rowCount();

if($row_count > 0)
{
    $bookmarks_arr = array();
    $bookmarks_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC))
    {
        // nice way to cut down on all the typing
        extract($row);

        $bookmark = array(
            'bookmark_id' => $bookmark_id,
            'parent_id' => $parent_id,
            'title' => $title,
            'url' => html_entity_decode($url),
            'create_date' => $create_date
        );

        array_push($bookmarks_arr['data'], $bookmark);
    }
    
    echo json_encode($bookmarks_arr);
} 
else 
{
    echo json_encode(array('message' => 'No bookmarks found.'));
}