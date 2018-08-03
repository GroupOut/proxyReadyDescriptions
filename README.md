# Project Name

> Presents product descriptions using a RESTful API
> on a Node Express server querying a MySQL database.

## Related Projects

- https://github.com/GroupOut/GroupOutJensProxy
- https://github.com/GroupOut/deal-info
- https://github.com/GroupOut/gallery
- https://github.com/GroupOut/reviews

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [Installation](#installation)

## Usage

After installation below:
  [ ] run server with `npm start`

## Requirements

  [ ] Move `images` file found here: `./public/images/`
      into the inside of the proxy server repo's `public` file.
  [ ] To engage google API a key will need to be supplied and the `googlemap.example.js` file renamed to `googlemap.js`
  [ ] Key can be obtained from here: <https://cloud.google.com/maps-platform/#get-started>

- Node 6.13.0
- 

## Installation

From within the root directory:

```sh
mysql -u root < ./db/schema.sql
npm install
```
