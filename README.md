# Spotify Player
[![BCH compliance](https://bettercodehub.com/edge/badge/gabriel-hahn/spotify-player?branch=master)](https://bettercodehub.com/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/847a6185823145d6bcfe94a5be800b72)](https://www.codacy.com/app/gabriel_hahn/spotify-player?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gabriel-hahn/spotify-player&amp;utm_campaign=Badge_Grade)

A example of Spotify player which using [spotify-wrapper](https://github.com/gabriel-hahn/spotify-wrapper).

# Browser Support

This project relies on [Fetch API](https://fetch.spec.whatwg.org/) which is supported in the following browsers:

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## How to Run

1. First go to [Spotify Developers API](https://developer.spotify.com/web-api/) and create your Token. Then add your token on [src/Spotify.js](src/Spotify.js). **Remember that the token will expire in 60min**
2. Install the dependencies with `npm i`.
3. Run your application with `npm start`.

## Something in the future?

- [ ] Create authentication method to get Token
- [ ] Show similar artists
- [ ] Create player buttons (prev, pause/play, pause)
- [ ] Show music timeline

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/spotify-player/tags).

## Authors

|  [Gabriel Hahn](https://github.com/gabriel-hahn/)   |
|  [Willian Justen](https://github.com/willianjusten/) - Course teacher   |

See also the list of [contributors](https://github.com/gabriel-hahn/spotify-player/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
