# Personal socials and gaming site
## About
Not too sure what to name this but you can link your social media, talk about yourself a bit, and list some games as well.

Well the css is quite ass and the code... works
## How to use
Feel free to edit the html (``index.html``) and css (``style.css``) however you like, but for adding links I recommend editing ``data.json``.  
**ALL IMAGES, FONTS ETC MUST BE IN ``./src/storage`` OR ITS SUBFOLDERS. AND THIS FOLDER (``storage``) SHOULD NOT BE RENAMED OR MOVED**
### data.json schema
``title`` is the title in the center of the page  
``about-me-1`` is the top middle text block  
``about-me-2`` is the bottom middle text block  
``fav-games`` is the bottom right text block

``data.json`` expects two arrays that are ``social-media`` and ``games`` which include the following data per link.
```
{
    "name": "Github",
    "url": "https://github.com/xre15x",
    "font": "./fonts/myEpicFont.woff2",
    "colour": "rgb(50, 50, 50)",
    "logo-url": "./images/social-media/logos/github.png",
    "background-url": "./images/social-media/backgrounds/github.png"
}
```
Note:
- Only ``name`` is required and the rest can be omitted and a default will be in place.
- Both relative and absolute urls should work fine.
- ``colour`` can be any colour format css supports.
- ``font`` supports all main font formats like ``.wott2``, ``.ttf`` etc (does **not** support importing fonts)

Here is an example layout of what ``data.json`` should look like
```
{
    "title": "Hello, I am xRe15x",
    "about-me-1": "I like...",
    "about-me-2": "I also like...",
    "fav-games": "My favourite games are...",
    "social-media": [
        {
            "name": "Youtube",
            "font": "./fonts/coolFont.ttf",
            "url": "https://youtube.com",
            "colour": "rgb(200, 0, 0)",
            "logo-url": "./images/social-media/logos/youtube.png",
            "background-url": "./images/social-media/background/myChannel.png"
        }
    ],
    "games": [
        {
            "name": "ROBLOX",
            "font": "./fonts/robloxFont.ttf",
            "url": "https://roblox.com",
            "colour": "rgb(180, 180, 180)",
            "logo-url": "./images/social-media/logos/roblox.png",
            "background-url": "./images/social-media/background/coolRobloxGame.png"
        }
    ]
}
```
## Credits
Social media logos/icons included are from [here](https://www.figma.com/community/file/839558611085349133/social-media-icons-logos)