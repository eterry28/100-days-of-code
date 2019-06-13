<?php
class Bookmark 
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

        $this->bookmark_id = $row['bookmark_id'];
        $this->parent_id = $row['parent_id'];
        $this->title = $row['title'];
        $this->url = $row['url'];
        $this->create_date = $row['create_date'];

        return $stmt;
    }
}