# Coding with Atom (our IDE)

**NOTE:** If you're using your first Mac computer, you might find [this Windows to Mac conversion article](https://support.apple.com/en-us/HT204216) useful before diving into this content.

Let's install Atom and a few useful plugins to help you work more affectively. You will be writing your code in Atom, so it's important to get it set up right away!

## Steps

1. [Download Atom](#1--download-atom)
2. [Explore Default Functionality / Core Packages](#2--explore-default-functionality--core-packages)
3. [Install Community Packages](#3--install-community-packages)
4. [Install Shell Commands](#4--install-shell-commands)

### 1 | Download Atom

1. Download from here: [https://atom.io/](https://atom.io/)
2. After downloading, drag the Atom icon from Downloads to the Applications folder.
![](images/applications.png)
3. To keep Atom in your dock, right-click on the Atom icon in your dock. **NOTE:** If you DO NOT see the icon, open Atom by double-clicking its icon in the Applications folder.
4. In the menu that appears, select Options and Keep in Dock.
![](images/keep-in-doc.png)

### 2 | Explore Default Functionality / Core Packages
Atom is the "hackable text editor". This means that the community that uses it extends it via packages they write to add new functionality. As these packages become popular the maintainers (programmers that work on and are responsible for a software project) of Atom can decide to make functionality default.

To see what is installed by default, go to the Preferences menu (also called settings):

1. In the Atom menu, select Preferences. A new tab will open called **Settings**. On the left hand side of this screen you should see a series of options: Settings, Keybindings, Packages, Themes, Updates, and Install.
2. Select **Packages**.

![](images/atom-setting-pane.png)

### 3 | Install Community Packages

You can install the community packages. Here is a small list of some suggested ones. Note, some packages need you to restart atom before they take effect.

- [minimap](https://atom.io/packages/minimap)
- [open-in-browser](https://atom.io/packages/open-in-browser)

There are two ways to install community packages in Atom. The first way is described below. If you are interested in installing things via the command line, there is an [atom package manager (apm)](http://flight-manual.atom.io/using-atom/sections/atom-packages/#command-line).

##### Install from Preferences

1. In the Preference menu, click **Install** on the left selection.
2. In the search box, type the exact name of the package from the list above. As you see in the picture below many matches come up.
3. Find the correct package in the list and click the blue install button.

**NOTE:** You might need to restart Atom for the package to start working.

![](images/atom-install.png)

I already have installed minimap, so I don't have a blue button.

Some packages require you launch them from the package menu.

![](images/atom-packages-menu.png)

### 4 | Install Shell Commands

Atom's shell commands are typically installed by default, but sometimes that may not happen. Shell commands are commands that can be used in the command line to make Atom perform some action.

We will first make sure you actually need to install this command line application.

1. Open the Terminal application.
2. In Terminal, type `which atom` and press the ENTER (or RETURN) key to execute the command.
 - If you see `/usr/local/bin/atom` you have Atom's shell commands installed. Do not do any of the following steps.
 - If you see nothing, continue to the next step.
3. In Atom, click on **Atom** in the top menu bar.
4. In the menu that appears, select **Install Shell Commands**.

Remember, we are all in this together and the Slack channel is there to help. If you are having troubles ask there, if you figured something out that could help others also share it there.
