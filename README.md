# Unit 1: Git, HTML/CSS, Hello World

**Please watch all the videos for Week 1 on [the Tier 1 site](http://fullstack.primeacademy.io) before starting the assignment.** 

These videos contain important information that will help you complete the assignment. Feel free to refer back to the videos whenever you need them!

## Onward!

For the assignment this week, you will practice using the tools you saw in the videos. You should have worked along with them as you watched. If you did, the following should be somewhat familiar.

You're going to:

* use git to fork/clone a repository (aka repo) from GitHub and get your work published back to your GitHub account
* set up files and connect them
* edit the HTML and CSS
* test your work in the browser
* use git to "save" your work
* use the command line and your Mac's built-in Terminal
* turn your assignment in through Prime's Assignment Portal

---

## Set-up: Fork and Clone This Repo

Using your new git and GitHub skills, Fork this repo to your own GitHub account. Then Clone it to your own computer. You are going to end up cloning 80+ repos at Prime so try to stay organized!

We recommend making a "prime" folder inside your "home" directory, which will be named your username. Inside of this, perhaps a "tier1" folder in which you can keep all of your Tier 1 work.

Wherever you put it, use your Terminal to `cd` into your new cloned folder of this assignment.

## Set-up: Opening your assignment in VSCode

You are going to be writing some code in VSCode, so open this entire folder in VSCode.

Do one of the following:

- Using the Terminal command of `code .` OR
- Using Finder/folder to drag the assignment folder to VSCode in your Dock OR
- Open VSCode first, then use the File > Open command to choose your assignment folder

---

## Your Actual Assignment

Inside of project you just opened in VSCode, is an *assignment* folder.

Inside of this folder, we've provided you with a few files, some of those files are inside of other folders.

**IMPORTANT:** Don't edit any files other than those inside of the *assignment* folder, and you should not need to move files around inside the folder.

### Files Provided

- *assignment/index.html* (base functionality - required)
- *assignment/helloWorld.js* (base functionality - required)
- *assignment/style.css* (base functionality - required)
- *assignment/checkpoints/terminal.txt* (base functionality - required)

## 1) Edit the HTML

Inside of the `index.html` file are comments with tasks for you to complete. Write the code below the comment (no need to delete the comment), like this:

```HTML
<!-- Create a header with an h1 containing your name -->

<header>
  <h1>Your Name Here</h1>
</header>
```

Feel free to add more content than just what is in the comments (but the content laid out in the comments is required)!

## Test Your Work

As you make changes, it's important to check your work often. Our mantra is going to be "code a little then test!" Over and over again.

To test your work, open your `index.html` file in Chrome. You should see all of the content you created in your HTML file.

If you make more changes in VSCode, save your work, then Refresh the browser to see them.

## 1.1) Make a Commit

*When you're done with your HTML, make a "`commit`" with `git`.* 

> Definitly refer to the Git Practical video on this! You'll be making commits *all the time* so eventually you'll get this memorized. For now, take it one step at a time!

Here is the pattern. Be sure you are in the project folder!

1. write some code
2. test your code
3. in Terminal: `git add .`
4. in Terminal: `git commit -m "what you changed"`
5. back to step 1!


## 2) Edit the CSS

Now that we have content in our HTML file, let's make it look nice with some styling!

- The CSS file is already linked to the HTML file using a `link` tag.
- There are comments in the `style.css` file. You can write your styles below the comments.
- You can also add more styles if you want, but make sure you include the styles in the directions, those are required!

*When you're done, make another "`commit`" with `git`.*

Here is an example of what your assignment could look like: 

![](images/mockup.png)

---

## 3) Complete the Terminal Checkpoints

The videos this week introduced you to working with the command line through Terminal. Answer the questions below to check how much you learned.

In the `checkpoints` folder, you will find a `terminal.txt` file. This is just a plain old file of characters. No code, just text.

1. Open the `terminal.txt` file in VSCode. VSCode can open many kinds of files!
2. In the `terminal.txt`, answer all of the questions about the Terminal. All you need to do is type your answer below each question! 

> If you're unsure, feel free to do some research, or write that you're not sure. All we're asking for is you try your best! 

*When you're done, make another "`commit`" with `git`.*

---

## 4) Complete JavaScript "Hello World!" 

Our assignment also contains a `helloWorld.js` file. A "hello world" is a common first step in learning to code, and the first program many programmers write.

In the video for this week, we used a `console.log()` to get messages from our JavaScript file to display in the browser's console interface.

1. You will need to source in the `helloWorld.js` file into your `index.html` file.
2. Refer back to the video to cover how to source in and get "hello world" to log in the browser console for your assignment! More information on `console.log` can be found [here](https://www.w3schools.com/jsref/met_console_log.asp).
3. Be sure to test your work by opening your browser console for this assignment. You should be able to see the text "hello world" or whatever you logged!

*When you're done, make another "`commit`" with `git`.*

---

## 5) "Upload" Your Completed Work to GitHub

Now that your assignment is done, we'll use `git` to `push` your work to GitHub.

You can find detailed instructions on how to do this in this week's video content.

## 6) Submit Your Assignment in the Prime Portal

You will need to "submit" a link to your GitHub repo containing your work for this assignment. Prime will then use this link to find and check out your assignment! 

We won't know you're done until you [Submit it in the Portal](https://portal.primeacademy.io/).

You can find detailed instructions on how to do this in this week's video content.

---

## 7) Answer the Slack Discussion Question

Make sure that you answer this week's Slack discussion question (found each week in the left sidebar of the Tier 1 site) in your cohort's Slack channel!

