<?php
class Bookmarks 
{
    // database info
    private $conn;
    private $table = 'bookmarks';

    // bookmark object properties
    public $bookmark_id;
    public $parent_id;
    public $title;
    public $url;
    public $create_date;

    // constructor
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // get all bookmarks
    public function read()
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
            ORDER BY b.create_date DESC';           

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
}