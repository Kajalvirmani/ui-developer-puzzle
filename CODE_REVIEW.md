CODE_SMELL

# Observables are not unsubscribed . This would cause memory leak

# Reducers (failedRemoveFromReadingList, confirmedRemoveFromReadingList, failedAddToReadingList, confirmedAddToReadingList) were not handled for reading list.component.-- fixed

# Spinner or Loader is required at the time of API calls to enhance user experience(till the data is not returned from API).

# Can use async pipe instead of subscriptions.

# In Books.service.ts file, there is no proper error handling if API is not responding.--fixed

# Use of innerHTML in book-search.component.html creates a potential security risk for website.--fixed

# Return types of functions are missing. If not returning anything void should be mentioned.




ACCESSIBILITY

AutomationScans:-

# Background and foreground colors do not have a sufficient contrast ratio. --fixed

Manual Scans:-

# Missing alternative text on images. --fixed

# Buttons do not have an accessible name. --fixed

# In BookSearch component,"JavaScript" anchor element is not clickable with tab. So, we can replace it with some other native element like button. --fixed

