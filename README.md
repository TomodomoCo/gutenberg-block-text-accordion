# Text Accordion Block for Gutenberg

A simple text accordion block for Gutenberg, allowing you to create a block of text with a header that can be opened or closd.

![accordion___ _mindful_ _wordpress](https://user-images.githubusercontent.com/1231306/43272789-d92c1ea2-90c8-11e8-8079-72d8bef92501.png)

## Installation

When installed from this repo, you must build the JavaScript files.

1. `nvm install`
2. `nvm use`
3. `npm install`
4. `npm run build`

## Usage

The block is designed to work seamleslsy out of the box; all the CSS and JS you need is included and enqueued.

To dequeue the built-in CSS and/or JavaScript, you can use the built-in filters:

```php
// Don't enqueue the front-end CSS
add_filter('Tomodomo\Gutenberg\Block\TextAccordion\enqueueFrontEndCss', '__return_false');

// Don't enqueue the front-end JS
add_filter('Tomodomo\Gutenberg\Block\TextAccordion\enqueueFrontEndJs', '__return_false');
```

## About Tomodomo

Tomodomo is a creative agency for magazine publishers. We use custom design and technology to speed up your editorial workflow, engage your readers, and build sustainable subscription revenue for your business.

Learn more at [tomodomo.co](https://tomodomo.co) or email us: [hello@tomodomo.co](mailto:hello@tomodomo.co)

## License & Conduct

This project is licensed under the terms of the MIT License, included in `LICENSE.md`.

All open source Tomodomo projects follow a strict code of conduct, included in `CODEOFCONDUCT.md`. We ask that all contributors adhere to the standards and guidelines in that document.

Thank you!
