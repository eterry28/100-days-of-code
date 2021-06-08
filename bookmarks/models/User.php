<?php
class User 
{
    // database info
    private $conn;
    private $table = 'users';

    // user object properties
    public $user_id;
    public $email;
    public $first_name;
    public $last_name;
    public $create_date;

    // constructor
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // get all users
    public function read()
    {
        $query = 'SELECT 
            user_id,
            email,
            first_name,
            last_name,
            create_date
            FROM 
            users
            ORDER BY create_date DESC';           

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    // get all bookmarks
    public function read_single()
    {
        $query = 'SELECT 
            b.bookmark_id,
            b.parent_id,
            b.title,
            b.url,
            b.create_date
            FROM 
            bookmarks b
            left join bookmarks p on b.parent_id = p.bookmark_id
            WHERE b.bookmark_id = ?
            LIMIT 0,1';           

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->bookmark_id);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->bookmark_id  = $row['bookmark_id'];
        $this->parent_id    = $row['parent_id'];
        $this->title        = $row['title'];
        $this->url          = $row['url'];
        $this->create_date  = $row['create_date'];

        return $stmt;
    }

    // create bookmark
    public function create()
    {
        $query = 'INSERT INTO ' . 
            $this->table . '
        SET            
            parent_id = :parent_id,
            title = :title,
            url = :url';
        
        // prepare
        $stmt = $this->conn->prepare($query);

        // clean data        
        $this->parent_id    = htmlspecialchars(strip_tags($this->parent_id));
        $this->title        = htmlspecialchars(strip_tags($this->title));
        $this->url          = htmlspecialchars(strip_tags($this->url));

        // bind data        
        $stmt->bindParam(':parent_id', $this->parent_id);
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':url', $this->url);

        print_r($stmt);

        // execute
        if($stmt->execute())
        {
            return true;
        }

        // print error if something goes wrong
        printf("Error: %s. \n", $stmt->error);
        return false;
    }

    // delete bookmark
    public function delete()
    {
        $query = 'DELETE FROM ' . 
            $this->table . '
        WHERE            
            bookmark_id = :bookmark_id';
        
        // prepare
        $stmt = $this->conn->prepare($query);

        // clean data
        $this->bookmark_id  = htmlspecialchars(strip_tags($this->bookmark_id));
        
        // bind data
        $stmt->bindParam(':bookmark_id', $this->bookmark_id);
        
        // execute
        if($stmt->execute())
        {
            return true;
        }

        // print error if something goes wrong
        printf("Error: %s. \n", $stmt->error);
        return false;
    }
}