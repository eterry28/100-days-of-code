<<<<<<< HEAD
<?php
    class Database 
    {
        // database properties
        private $host = 'localhost';
        private $db_name = 'bookem';
        private $username = 'root';
        private $password = '';
        private $conn;

        // connect to the db
        public function connect() 
        {
            $this->conn = null;

            try
            {
                $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } 
            catch(PDOException $e) 
            {
                echo 'Connection Error: ' . $e->getMessage();
            }
            return $this->conn;
        }
=======
<?php
    class Database 
    {
        // database properties
        private $host = 'localhost';
        private $db_name = 'bookem';
        private $username = 'root';
        private $password = '';
        private $conn;

        // connect to the db
        public function connect() 
        {
            $this->conn = null;

            try
            {
                $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username, $this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } 
            catch(PDOException $e) 
            {
                echo 'Connection Error: ' . $e->getMessage();
            }
            return $this->conn;
        }
>>>>>>> 5a4c2d936dccedf27472d6a1567cf214c4195f5b
    }