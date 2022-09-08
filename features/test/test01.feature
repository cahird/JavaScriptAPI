
@smoke
Feature: Verify Clearpoint API test


  Scenario Outline: Add  item to the list
    Given open the local host url
    When submit "<description>" create item request
    Then verify the items are created
    Examples:
      | description |
      | test0001 |
      | test0002 |
      | test0003 |
      | test0004 |
  Scenario Outline: Mark an item as completed
    Given open the local host url
    When submit "<description>" create item request
    Then verify the items are created
    When send complete request "<description>"
    Then verify the request is removed from show items "<description>"
    Examples:
      | description |
      | test1001 |
      | test1002 |
      | test1003 |
      | test1004 |


    
    


    