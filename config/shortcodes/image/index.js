const Image = require("@11ty/eleventy-img");
const path = require("path");
const { html } = require("code-tag");

async function image(src, alt, caption, sizes = "100vw") {
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [300, 600, 900, 1200],
    formats: ["avif", "webp", "jpeg"],
    urlPath: "/assets/images/",
    outputDir: "./_site/assets/images/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<picture>
    ${Object.values(metadata)
      .map((imageFormat) => {
        return html` <source
          type="${imageFormat[0].sourceType}"
          srcset="${imageFormat.map((entry) => entry.srcset).join(", ")}"
          sizes="${sizes}"
        />`;
      })
      .join("\n")}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>
    ${
      caption
        ? `<figcaption><p>${caption}</p>
      </figcaption>`
        : ``
    }
  </figure>`;
}

module.exports = image;
