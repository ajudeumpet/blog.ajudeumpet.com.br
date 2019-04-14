# This repository

This is repository source of blog (Ajude Um Pet)[ajudeumpet.com.br] (AUP). AUP using platform blog (ghost)[https://ghost.org].

## First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented our default theme pretty heavily so that it should be fairly easy to work out what's going on just by reading the code and the comments. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://themes.ghost.org) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives
- `page-autores` - Used for authors archives
- `page-tags` - Used for tags authors archives


# Development

This theme styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/), [Gulp](https://gulpjs.com) and [docker](https://www.docker.com/) installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

# Copyright & License

Copyright (c) 2019 Ajude Um Pet - Released under the [MIT license](LICENSE).
