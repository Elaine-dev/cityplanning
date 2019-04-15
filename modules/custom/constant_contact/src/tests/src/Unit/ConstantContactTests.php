<?php 
namespace Drupal\constant_contact\Tests\Unit;

use Drupal\Tests\UnitTestCase;

/**
 * Tests for the Constant Contact module.
 * 
 * @group constantcontact
 */ 
class ConstantContactTests extends UnitTestCase {
    //private $user;
    
    public function setUp() {
        parent::setUp();    
        
        // Create user then login.
        /* $this->user = $this->drupalCreateUser(array(
            'administer site configuration',
            'generate constant contact',
        ));
        $this->drupalLogin($this->user); */
    }
    
    public function testPushAndPro () {
        $stack = [];
        $this->assertSame(0, count($stack));
        
        array_push($stack, 'foo');
        $this->assertSame('foo', $stack[count($stack)-1]);
        $this->assertSame(1, count($stack));
        
        $this->assertSame('foo', array_pop($stack));
        $this->assertSame(0, count($stack));
    }
}
