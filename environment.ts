const url = process.env.APP_URL

export const environment = {
    url,
    apiUrl: `${url}/api/`,
    enable_dev_options: process.env.ENABLE_DEV_OPTIONS
}
