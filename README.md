### About This ToDoList App( Done using Class-Based Component)

## Functions that a User Can Perform:

1. Can create a Task
2. Submit the Task
3. Can delete the Task once it has been finished

## About Components

1. Form Component- This component houses the code related to the form elements which are:
   a) input tag(enter your text here) - which allows the user to write value of the task
   b) input tag(Submit Button)- this tag allows us to save the task once the user has completely wrote the task
   { Here, to prevent the default behaviour of Reloading the page is overridden by passing an event handler(onSubmit) which in handeld by a method preventDefault()- this restricts the default behaivour of the browser and lets us gain the information user has typed when he is done naming its task}

   2.List Component- This component houses the code that is responsible for the displaying of tasks user has given and are listed accordingly on subsequent submits

   The list components takes id,key and select attributes as props and displays a paragrapgh accordingly.Moreover select attribute is initialized with a deleteItem method responsible for removing a particular pargarapgh with specific id from the inputList, this can't be done in List component itself because the task passed is a props and props are immutable to overcome this a method is fired in the List component when onClick is experienced on <p> tag desired to be deleted

## How required functions are achieved in Forms Compnent:

# 1.States-

      a) inputValue: this state is responsible for tracking every stroke of the keyboard that a user hits.
      How is it initialized?
      in the input tag reserved for the Task writing an inbuild eventHandler called  OnChange tracks strokes on keys and generates an event in response, this event is ustilised by the handleOnChange method. What happens in handleOnChange method?
        Simply initialize/ set the state of inputValue key to the event generated by - event.target.value

      b) inputList: this state is responsible for adding the tasks to an array which tracks the record of tasks
      How it is Done?

      In addition to states there are two auxillary array declared namely "aux" and "delAux" the responsiblities of these two arrays is to keep track of the inputValue state which is used while adding the task and inputList array which is used while deleting the task from inputList respectively

      On Adding Task-
       i) user writes the task in input tag
       ii) keystrokes are tracked by inputValue state until he is done writing the particular task and is ready to submit
       iii) User submits the form
       iv) The task which is now stored in inputValue is now added to the inputList array
       v) inputList items are then mapped to the List Component
       vi) List component renders the user task(s) in a <p> tag for each task
       vii) To clear the value of the input tag it is initialized with the state inputValue and once the form is submittd the state of inputValue is updated to an empty string

      On Deleting Task-
        i) user clicks on the particular paragrapgh that needs to be deleted
        ii) this fires an onClick event that takes "select" prop method and id of the particular paragraph as an argument
        iii) Because props are immutable, therefore deleteItem is defined in the parentComponent of the List
        iv) using "aux" array is filtered off the particular task item and the new array is stored in the delAux array
        v) delAux array is used to set the state of inputList ie: inputList is now contains only pending tasks

## CONCEPTS USED IN MAKING

1. Event Handling
2. States
3. Controlled Component
4. Props passing and accesing
5. map() & filter() array helper methods
6. use of spread operator
