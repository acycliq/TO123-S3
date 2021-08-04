function config() {
    return {
            roi: {"x0": 0, "x1": 12928, "y0": 0, "y1":7124},
            imageSize: [262144, 262144 * 7124/12928],
            tiles: 'https://raw.githubusercontent.com/acycliq/TO123-S3/master/dashboard/data/img/262144px/{z}/{y}/{x}.jpg',
            mCherry: 'https://raw.githubusercontent.com/acycliq/TO123-S3/master/dashboard/data/mCherry_image/{z}/{y}/{x}.jpg',
            cellData: 'https://api.github.com/repos/acycliq/TO123-S3/contents/dashboard/data/cellData',
            geneData: 'https://api.github.com/repos/acycliq/TO123-S3/contents/dashboard/data/geneData',
            cellCoords: 'https://api.github.com/repos/acycliq/TO123-S3/contents/dashboard/data/cellCoords',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        }
}

