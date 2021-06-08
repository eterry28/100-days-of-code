<<<<<<< HEAD
<?php
// header info - allowing everything for now.
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

// config and model
include_once '../../config/Database.php';
include_once '../../models/Bookmarks.php';

// database connection
$database = new Database();
$db = $database->connect();

// bookmark info
$bookmark = new Bookmark($db);

$data = json_decode(file_get_contents('php://input'), true);


if($data)
{
    $bookmark->bookmark_id = $data['bookmark_id'];

    // create bookmark
    if($bookmark->delete())
    {
        echo json_encode(
            array('message' => 'Bookmark ' . $data['bookmark_id']. ' deleted.')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'Bookmark was not deleted.')
        );
    }
}
else
{
    echo json_encode(
        array('message' => 'Could not find bookmark data in DELETE.')
    );
=======
<?php
// header info - allowing everything for now.
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');

// config and model
include_once '../../config/Database.php';
include_once '../../models/Bookmarks.php';

// database connection
$database = new Database();
$db = $database->connect();

// bookmark info
$bookmark = new Bookmark($db);

$data = json_decode(file_get_contents('php://input'), true);


if($data)
{
    $bookmark->bookmark_id = $data['bookmark_id'];

    // create bookmark
    if($bookmark->delete())
    {
        echo json_encode(
            array('message' => 'Bookmark ' . $data['bookmark_id']. ' deleted.')
        );
    }
    else
    {
        echo json_encode(
            array('message' => 'Bookmark was not deleted.')
        );
    }
}
else
{
    echo json_encode(
        array('message' => 'Could not find bookmark data in DELETE.')
    );
>>>>>>> 5a4c2d936dccedf27472d6a1567cf214c4195f5b
}