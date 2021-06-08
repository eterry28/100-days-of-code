<<<<<<< HEAD
<?php
spl_autoload_register(function ($class) {
    include $class . '.php';
});

class ImprovedComradeColaMachine implements StateInterface
{
  protected $hasCreditState;
  protected $noCreditState;
  protected $soldState;
  protected $emptyState;
  protected $promotionalState;

  protected $state;
  protected $inventory;

  public function __construct($inventory)
  {
    $this->hasCreditState = new HasCreditState($this);
    $this->noCreditState = new NoCreditState($this);
    $this->soldState = new SoldState($this);
    $this->emptyState = new EmptyState($this);
    $this->promotionalState = new PromotionalState($this);
    $this->inventory = $inventory;
    $this->state = ($this->inventory > 0) ? $this->noCreditState : $this->emptyState;
  }

  public function __get($property) {
    if (property_exists($this, $property)) {
      return $this->$property;
    }
  }

  public function __set($property, $value) {
    if (property_exists($this, $property)) {
      $this->$property = $value;
    }
    return $this;
  }

  public function insertCredit()
  {
    $this->state->insertCredit();
  }

  public function customerChoice()
  {
    $this->state->customerChoice();
  }

  public function dispense()
  {
    $this->state->dispense();
  }

  public function returnCredit()
  {
    $this->state->returnCredit();
  }

  public function releaseProduct($message = "")
  {
    if(strlen($message) > 0)
    {
      echo $message;
    }
    else
    {
      echo "Enjoy your cold, refreshing Comrade Cola!\n<br />";
    }
    $this->inventory--;
    if($this->inventory+1 == 0)
    {
      echo $this->state;
    }
  }

  public function __toString()
  {
    $string = sprintf("<br /><br />Improved Comrade Cola PHP Vending Machine.\n<br />Inventory: %d<br />", $this->inventory);
    if($this->inventory > 0)
    {
      $string .= "\nMachine is waiting for credits.\n<br />";
    }
    else
    {
      $string .= "Looks like we're out of Comrade Cola. Better send a message to the distributor.\n<br />";
    }
    return $string;
  }

}
=======
<?php
spl_autoload_register(function ($class) {
    include $class . '.php';
});

class ImprovedComradeColaMachine implements StateInterface
{
  protected $hasCreditState;
  protected $noCreditState;
  protected $soldState;
  protected $emptyState;
  protected $promotionalState;

  protected $state;
  protected $inventory;

  public function __construct($inventory)
  {
    $this->hasCreditState = new HasCreditState($this);
    $this->noCreditState = new NoCreditState($this);
    $this->soldState = new SoldState($this);
    $this->emptyState = new EmptyState($this);
    $this->promotionalState = new PromotionalState($this);
    $this->inventory = $inventory;
    $this->state = ($this->inventory > 0) ? $this->noCreditState : $this->emptyState;
  }

  public function __get($property) {
    if (property_exists($this, $property)) {
      return $this->$property;
    }
  }

  public function __set($property, $value) {
    if (property_exists($this, $property)) {
      $this->$property = $value;
    }
    return $this;
  }

  public function insertCredit()
  {
    $this->state->insertCredit();
  }

  public function customerChoice()
  {
    $this->state->customerChoice();
  }

  public function dispense()
  {
    $this->state->dispense();
  }

  public function returnCredit()
  {
    $this->state->returnCredit();
  }

  public function releaseProduct($message = "")
  {
    if(strlen($message) > 0)
    {
      echo $message;
    }
    else
    {
      echo "Enjoy your cold, refreshing Comrade Cola!\n<br />";
    }
    $this->inventory--;
    if($this->inventory+1 == 0)
    {
      echo $this->state;
    }
  }

  public function __toString()
  {
    $string = sprintf("<br /><br />Improved Comrade Cola PHP Vending Machine.\n<br />Inventory: %d<br />", $this->inventory);
    if($this->inventory > 0)
    {
      $string .= "\nMachine is waiting for credits.\n<br />";
    }
    else
    {
      $string .= "Looks like we're out of Comrade Cola. Better send a message to the distributor.\n<br />";
    }
    return $string;
  }

}
>>>>>>> 5a4c2d936dccedf27472d6a1567cf214c4195f5b
