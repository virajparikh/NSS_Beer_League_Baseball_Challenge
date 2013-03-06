NSS_Beer_League_Baseball_Challenge
==================================

Phase 1:

Successfully completed:
1. using Bootstrap to format
2. having a minimum of 4 teams and maximum of 8 teams - alert messages pop up
    - this feature does have some bugs in it - 50% confidence in this
3. add teams - can successfully capture team info in a pop-up modal
4. save team to backlift server using Ajax
5. hover (& click) in standings that displays team info 

Phase 2: 

Successfully completed:
1. displaying schedule, by week, based on pre-defined schedule arrays
2. created a second modal that has a dropdown of all team matchups, and input boxes to enter a game score 
3. team records update, BUT with only 50% success. 
  
Big problem area that we realized the morning of assignment submission: 
1. The standings are only updating successfully if team 1 wins.   
    a. Problem arises if Team 2 wins the game.  Clearly this needs to be fixed.
    b. There seems to be some kind of caching problem also, connected to the dropdown matchup list.  Ideally we would have prevented scores from being entered twice on the same game, but ran out of time.
2. We had no time to test this app; no doubt other bugs are embedded in the code
    

Started but NOT completed:
1. Sort standings by winning percentage using bubble sort
2. Formatting of schedule and updated scores into a nicely presented format.  

Not started/completed: 
1. Form validation

Other comments:
1. We successfully implemented a Github workflow process that frequently pushes our individual work and merges it into a "develop" branch.
    - Branches used are master, develop, viraj and desmond
2. Backlift issues - occasionally did not update the database.  This was a very minor issue.
