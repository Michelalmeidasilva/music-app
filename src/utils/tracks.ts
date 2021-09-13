import TrackPlayer from "react-native-track-player";
import ytdl from "react-native-ytdl";
import RNFS from "react-native-fs";
import RNFetchBlob from "rn-fetch-blob";
import ffmpeg from "react-native-ffmpeg";
import { Platform, PermissionsAndroid } from "react-native";
// export const start = async () => {
//   // Set up the player
//   await TrackPlayer.setupPlayer();

//   // Add a track to the queue
//   await TrackPlayer.add({
//     id: "trackId",
//     url: require("track.mp3"),
//     title: "Track Title",
//     artist: "Track Artist",
//     artwork: require("track.png"),
//   });

//   // Start playing it
//   await TrackPlayer.play();
// };

export const downloadSong = async (url: string, song) => {
  song = {
    title: "test",
    ext: "mp3",
  };
  url =
    "https://r2---sn-oxunxg8pjvn-cbme.googlevideo.com/videoplayback?expire=1628196836&ei=hPsLYfSbNdX21sQP9qCT2As&ip=187.23.141.95&id=o-AFd_ZSihOWRF32O90zKbKLJKzci09nTVx2ZR2Io14tTj&itag=251&source=youtube&requiressl=yes&mh=3Z&mm=31%2C29&mn=sn-oxunxg8pjvn-cbme%2Csn-bg0eznlz&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=903750&vprv=1&mime=audio%2Fwebm&ns=LXBEVSrAv0juKURBNLQN0PMG&gir=yes&clen=5732364&dur=343.981&lmt=1612955810419794&mt=1628174701&fvip=2&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=1432434&n=0REIrus_N-bb_Mstw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgdIGvd0eaYbwtjEWeJ0ZulmLn6WR1aN-3jtNdeR_n7s0CIQD5F3-WIpoNNN2qiMgslifwjErToXrfIYMTzXCBUkhtIQ%3D%3D&ratebypass=yes&sig=AOq0QJ8wRQIhALAG9IkoWRp6fr40mtcAZDCc2YBoKKsKwkX0Rk4FTaXvAiBwqJE7tws2ExQyxldC62C_YbMX8OIt-5PAgtZh8-GKnQ%3D%3D";

  RNFetchBlob.config({
    fileCache: true,
    appendExt: song.ext,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      title: "test",
      path: RNFetchBlob.fs.dirs.DownloadDir + `/${song.title}`, // Android platform
      description: "Downloading the file",
    },
  })
    .fetch("GET", url)
    .then((res) => {
      console.log("res", res);
      console.log("The file is save to ", res.path());
    });
};

// export const downloadFile = async () => {
//   const downloadUrl = "https://reactnative.dev/img/header_logo.png";

//   await requestPermission();

//   const file = {
//     ext: "png",
//     name: "header_logo.png",
//   };
//   try {
//     const {
//       dirs: { DownloadDir, DocumentDir },
//     } = RNFetchBlob.fs;
//     const isIOS = Platform.OS === "ios";
//     const directoryPath = Platform.select({
//       ios: DocumentDir,
//       android: DownloadDir,
//     });
//     const filePath = `${directoryPath}/${file.name}`;
//     const fileExt = file.ext;
//     var mimeType = "";

//     if (fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg") {
//       mimeType = "image/*";
//     }
//     if (fileExt === "pdf") {
//       mimeType = "application/pdf";
//     }
//     if (fileExt === "avi" || fileExt === "mp4" || fileExt === "mov") {
//       mimeType = "video/*";
//     }

//     const configOptions = Platform.select({
//       ios: {
//         fileCache: true,
//         path: filePath,
//         appendExt: fileExt,
//         notification: true,
//       },
//       android: {
//         fileCache: true,
//         appendExt: fileExt,
//         addAndroidDownloads: {
//           useDownloadManager: true,
//           mime: mimeType,
//           title: file.name,
//           mediaScannable: true,
//           notification: true,
//         },
//       },
//     });

//     console.log("path", filePath);

//     RNFetchBlob.config(configOptions as RNFetchBlobConfig)
//       .fetch("GET", downloadUrl)
//       .then((resp) => {
//         console.log("resp", JSON.stringify(resp, null, 2));
//         // signalSuccess();
//         if (isIOS) {
//           RNFetchBlob.ios.openDocument(resp.data);
//         }
//         console.log("save", resp.path());
//       })
//       .catch((e) => {
//         // signalError();
//         console.log("fetch error: ", e);
//       });
//   } catch (error) {
//     console.log("general error: ", error);
//   }
// };

// function downloadMp3({ mp3File, params: { videoId } }, res, next) {
//   if (mp3File) {
//     next();
//   }

//   ytdl.getInfo(`http://www.youtube.com/watch?v=${videoId}`, {
//     quality: "highestaudio",
//   });

//   var proc = ffmpeg({ source: video });
//   proc.setFfmpegPath("./node_modules/ffmpeg-binaries/bin/ffmpeg");
// }
export const downloadMusic = async (url: string) => {
  // url = "https://www.youtube.com/watch?v=SrbRMvYOvLg&ab_channel=BlacktopMojo";
  // const youtube = await ytdl.getInfo(url, { quality: "highestaudio" });
  // console.log("test", JSON.stringify(youtube, null, 2));
  // var path = RNFS.DocumentDirectoryPath + "/test.txt";
  // let info = await ytdl.getInfo("SrbRMvYOvLg");
  // let audioFormats = ytdl.filterFormats(info.formats, "audioonly");
  // console.log(
  //   "Formats with only audio: " + JSON.stringify(audioFormats, null, 2)
  // );
  // url = "https://www.youtube.com/watch?v=SrbRMvYOvLg&ab_channel=BlacktopMojo";
  // const music = await ytdl(url, {
  //   filter: "audioonly",
  // });
  // console.log("music", JSON.stringify(music, null, 2));
  // const test = await RNFS.writeFile(path, "Lorem ipsum dolor sit amet", "utf8");
};

// export const read = async () => {
//   RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
//     .then((result) => {
//       console.log("GOT RESULT", result);

//       // stat the first file
//       return Promise.all([RNFS.stat(result[0].path), result[0].path]);
//     })
//     .then((statResult) => {
//       if (statResult[0].isFile()) {
//         // if we have a file, read it
//         return RNFS.readFile(statResult[1], "utf8");
//       }

//       return "no file";
//     })
//     .then((contents) => {
//       // log the file contents
//       console.log(contents);
//     })
//     .catch((err) => {
//       console.log(err.message, err.code);
//     });
// };

export const readExample = async () => {
  let dirs = RNFetchBlob.fs.dirs;
  await RNFetchBlob.fs
    .readFile(dirs.MusicDir + "/.songs/", "base64")
    .then((data) => {
      console.log(data);
      // handle the data ..
    });
};

export const saveExample = async () => {
  let dirs = RNFetchBlob.fs.dirs;
  console.log(RNFetchBlob);
  // RNFetchBlob.config({
  //   // response data will be saved to this path if it has access right.
  //   path: dirs.MusicDir,
  // })
  //   .fetch("GET", "http://www.example.com/file/example.zip", {
  //     //some headers ..
  //   })
  //   .then((res) => {
  //     // the path should be dirs.DocumentDir + 'path-to-file.anything'
  //     console.log("The file saved to ", res.path());
  //   });
  console.log(dirs);
};

const requestPermission: () => Promise<boolean | undefined> = async (
  permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
) => {
  try {
    const granted = await PermissionsAndroid.request(permission);

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {}
};
