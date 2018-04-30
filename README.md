# What Year

This app allows you to search Spotify for the 150(-ish) most popular albums from a given year.

## Dependencies
- Node 9 +
- Now (for deployment)

## Deployment

Deploying to now.sh is pretty straightforward (assuming you have CLI tools):

- Register an app with Spotify, and place your `client_id`, `secret`, and `redirect_uri` in an object under `src/data/secrets.js`

```js
//secrets.js
const secrets = {
  client_id: 'id',
  client_secret: 'secret',
  redirect_uri: 'http://foo.bar'
}
```

Then...

```sh
npm run build
now
```

## License
MIT

## Contributing
1. Fork it
2. Create your feature branch (`git checkout my-new-feature`)
3. Commit your changes (`git commit -am `Add some feature`)
4. Push to the branch (`git push origin my-new-feature`)

