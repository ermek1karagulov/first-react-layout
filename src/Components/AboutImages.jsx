import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AboutPage from "./AboutPage";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <div>
      <div>
        <AboutPage />
        <ImageList
          className="image-list"
          sx={{
            width: 800,
            height: 600,
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: "translateZ(0)",
          }}
          rowHeight={200}
          gap={1}
        >
          {itemData.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${item.title}`}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://avatars.mds.yandex.net/i?id=89dfdc0ec4cbc2f1d9d8605ccdbd74f9-5341819-images-thumbs&n=13",
    title: "Betman",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=b2585a0a7d65cc76ca69e9186b95baa72835da77-8340613-images-thumbs&n=13",
    title: "qwert",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=ffd827e029d240d14e7e91126500dbe0-5233216-images-thumbs&n=13",
    title: "Superman",
    author: "@helloimnik",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=ffd827e029d240d14e7e91126500dbe0-5233216-images-thumbs&n=13",
    title: "Captain Americ",
    author: "@nolanissac",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=799767043f49da6c6a60feb44493946459ed94b3-8549619-images-thumbs&n=13",
    title: "Hulk",
    author: "@hjrc33",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=83e4e78e700787e8ff16eb7198372844d41faf59-4914299-images-thumbs&n=13",
    title: "SpidarMan",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=923d7b4e1536600aa04e28d380606e8585e4546f-4275191-images-thumbs&n=13",
    title: "stallman",
    author: "@tjdragotta",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=71ebd3ac5639df2b0d55fd0ed2bc7fdad4b117c0-8497818-images-thumbs&n=13",
    title: "ktflulhguy",
    author: "@katie_wasserman",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=5e0c661ef21630717cb6f80d5053af7540f53595-7065990-images-thumbs&n=13",
    title: "Flesh",
    author: "@silverdalex",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=a35db4bc9b9391132f8f736ac1242c3d-5390929-images-thumbs&n=13",
    title: "Black Pantera",
    author: "@shelleypauls",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=e32975a793587b0de4277703307fc461-5357509-images-thumbs&n=13",
    title: "Tor",
    author: "@peterlaster",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=d7b24dd3b8b913cb0c430a78eaaf71d71f9c6ea2-8255596-images-thumbs&n=13",
    title: "hgcluvlujg",
    author: "@southside_customs",
  },
];
