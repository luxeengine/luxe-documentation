---
title: Installing Luxe
description: Installing luxe using the luxe launcher.
---

Below we'll get the pieces we need to work with luxe.

:::tip[All steps!]{icon="approve-check-circle"}
Make sure to read both sections below before continuing!
:::

## Download the luxe launcher

- [Get the luxe launcher](https://luxeengine.com/get)
- Run the launcher, it'll offer to install the latest version
- This will install the engine, editor and agent

![](../../../assets/image/get/launcher.png)

- Progress will be shown under the install button
  
![](../../../assets/image/get/install.png)

- After installing, you should see this
  
![](../../../assets/image/get/empty.png)

- Once you've created or added projects, it will look like this

![](../../../assets/image/get/projects.png)

## Installing code editor support

Currently the primary supported code editor is [Visual Studio Code](https://code.visualstudio.com/).   

It's a free cross platform editor with great support for custom extensions.
The extension includes features like code completion, jump to definition, and so on.

:::note[Install Visual Studio Code]
Download and install Visual Studio Code from the above link if you don't have it.
:::

To install support for luxe, open the extensions panel. 
This is an icon on the side bar, or found via the `View -> Extensions` menu.  

Search the extensions for 'luxe' and when found, select 'install'.   
_(Make sure it's the official one)_. [View the extension in the marketplace.](https://marketplace.visualstudio.com/items?itemName=luxeengine.luxe).

![](../../../assets/image/get/vscode-0.png)

## Linux details

Linux makes things a little more nuanced. We're working to improve the workflow.

To install the launcher you have a few options:

### AppImage

An AppImage is a pre-bundled application ready to use. 
Once you download it, you might have to make it executable first.
This varies by distro, if you double click, some pop up a message asking if you want it executable. 
Sometimes you can right click and view properties, making it an executable.
Othertimes you have a right click -> Run as program option.

If you need to, you can use the terminal:

```bash
cd <path where you downloaded it to>
chmod +x luxe_launcher-2025.11.1.AppImage
```

### Zip file

The zip file contains a plain ELF binary. You might need to mark it executable as well.
Similar to the app image section, you can use your distro option, or you can use terminal:


```bash
cd <path where you downloaded it to>/luxe_launcher-2025.11.1/
chmod +x luxe_launcher-2025.11.1
```

If your distro still doesn't let you run it, you might need to run via terminal too:

```bash
./luxe_launcher-2025.11.1
```
