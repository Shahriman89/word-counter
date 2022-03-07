# Forge Word Counter (Typescript)

This project contains a Forge app written in Typescript that displays `WORD COUNTER` in a Confluence macro.
To add the project to confluence page type /word-counter .

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Install link confluence app
https://developer.atlassian.com/console/install/3fc6d9e5-6481-4ebf-ac38-6cf4194b93fe?signature=c4b73c3baf6fe2093667d5b63ab163755abe68a12752cd099e7b3cbce0fb0b15&product=confluence

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify your app by editing the `src/index.tsx` file.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

### UI
![word-counter](https://user-images.githubusercontent.com/52990035/156964465-28da7469-c7f3-4b3e-9bb2-6d4aa56f9b01.png)


## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
