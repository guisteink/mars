# Project Overview

### #endpoints
[GET] /championship 
    
    Returns general championship data

[GET] /championship/possibilities

    Returns calculations of title chances for the top 4 and relegation for the bottom 4

### #co-routines
- After each round of the championship
    
        Downloads the updated CSV from Kaggle and saves it in the dataset as a JSON.

- Following the previous step

        Retrieves the championship data JSON and makes a call to OpenAI to calculate the chances of the top 4 and bottom 4 teams.


### #chances-calculation
Utilizes OpenAI to compute the probabilities of the top 4 and bottom 4 teams based on the obtained championship data.