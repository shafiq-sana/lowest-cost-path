# Basic algorithms

# The Problem

You are provided with a list of airports in the following format:

```jsx
const airports = [
	 {
		 start: 'ISB',
		 end: 'LHR',
		 cost: 1000
	 },
	 {
		 start: 'LHR',
		 end: 'NYC',
		 cost: 750
	 },
	 {
		 start: 'CBS',
		 end: 'NYC',
		 cost: 775
	 },
	 {
		 start: 'ISB',
		 end: 'CBS',
		 cost: 575
	 },
	 {
		 start: 'CBS',
		 end: 'GRC',
		 cost: 731
	 },
	 {
		 start: 'NYC',
		 end: 'GRC',
		 cost: 459
	 }
 ]
```

Each object / dictionary in the list, represents a connection from one airport to the next and has 3 properties: start, end and cost.

The airports may or may not have a direct connection. For example, you can get to LHR from ISB directly by following the path on index 0 of the example list. However, if you want to get from ISB to NYC, you have to take the path from ISB to LHR and then LHR to NYC or ISB to CBS and then CBS to NYC.

Write a program in the language of your choice which implements a function which take as
input: a list of airports, starting point, ending point AND returns the following:

1. The path that gives the lowest cost as an array / list e.g. [‘ISB’, ‘LHR’, ‘NYC’]
2. The cost of that path e.g., 1000
