<<<<<<< HEAD
<?php
// header info - allowing everything for now.
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

// config and model
include_once '../../config/Database.php';
include_once '../../models/Bookmarks.php';

// database connection
$database = new Database();
$db = $database->connect();

// bookmark info
$bookmark = new Bookmark($db);

$data = json_decode(file_get_contents('php://input'), true);

print_r($data);

if($data)
{
    //$bookmark->bookmark_id = $data->bookmark_id;
    $bookmark->parent_id = $data['parent_id'];
    $bookmark->title = $data['title'];
    $bookmark->url = $data['url'];

    // create bookmark
    if($bookmark->create())
    {
        echo json_encode(
            array('message' => 'Bookmark created.')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'Bookmark was not created.')
        );
    }
}
else
{
    echo json_encode(
        array('message' => 'Could not find bookmark data in POST.')
    );
=======
<?php
// header info - allowing everything for now.
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

// config and model
include_once '../../config/Database.php';
include_once '../../models/Bookmarks.php';

// database connection
$database = new Database();
$db = $database->connect();

// bookmark info
$bookmark = new Bookmark($db);

$data = json_decode(file_get_contents('php://input'), true);

print_r($data);

if($data)
{
    //$bookmark->bookmark_id = $data->bookmark_id;
    $bookmark->parent_id = $data['parent_id'];
    $bookmark->title = $data['title'];
    $bookmark->url = $data['url'];

    // create bookmark
    if($bookmark->create())
    {
        echo json_encode(
            array('message' => 'Bookmark created.')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'Bookmark was not created.')
        );
    }
}
else
{
    echo json_encode(
        array('message' => 'Could not find bookmark data in POST.')
    );
>>>>>>> 5a4c2d936dccedf27472d6a1567cf214c4195f5b
}