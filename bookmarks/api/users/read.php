<?php
// header info - allowing everything for now.
header('Access-Control-Allow-Origin: *');
// header info - expecting json.
header('Content-Type: application/json');

// config and model
include_once '../../config/Database.php';
include_once '../../models/User.php';

// database connection
$database = new Database();
$db = $database->connect();

// user info
$user = new User($db);
$result = $user->read();
$row_count = $result->rowCount();

if($row_count > 0)
{
    $user_arr = array();
    $user_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC))
    {
        // nice way to cut down on all the typing
        extract($row);

        $user = array(
            'user_id'       => $user_id,
            'email'         => $email,
            'first_name'    => $first_name,
            'last_name'     => $last_name,
            'create_date'   => $create_date
        );

        array_push($user_arr['data'], $user);
    }
    
    echo json_encode($user_arr);
} 
else 
{
    echo json_encode(array('message' => 'No user found.'));
}
