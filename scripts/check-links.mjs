const links = [
  'https://www.jvallejo.dev/',
  'https://github.com/jvallejoarguez',
  'https://linkedin.com/in/javier-vallejo-arguez',
  'https://www.northstarbets.ca',
  'https://www.hardrockbet.mx',
  'https://juegoimpostor.app/',
  'https://www.youtube.com/shorts/c__sfVVFmIA',
  'https://lineupai.vercel.app/',
  'https://github.com/jvallejoarguez/lineup-code',
  'https://warera-automator.vercel.app/',
  'https://www.rockhotelgibraltar.com/',
  'https://www.rockhotelgibraltar.com/about-us/wof',
  'https://informaticacr.es/',
];

async function checkLink(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    let response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': 'JVallejo-portfolio-link-checker/1.0' },
    });

    if (response.status === 405) {
      response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'user-agent': 'JVallejo-portfolio-link-checker/1.0' },
      });
    }

    const tolerated =
      response.status === 401 ||
      response.status === 403 ||
      response.status === 999;
    return {
      url,
      status: response.status,
      ok: response.ok || tolerated,
      tolerated,
    };
  } catch (error) {
    return {
      url,
      status: 'ERR',
      ok: false,
      tolerated: false,
      error: error instanceof Error ? error.message : String(error),
    };
  } finally {
    clearTimeout(timeout);
  }
}

const results = await Promise.all(links.map(checkLink));

for (const result of results) {
  const label = result.ok ? (result.tolerated ? 'WARN' : 'OK  ') : 'FAIL';
  console.log(`${label} ${String(result.status).padEnd(4)} ${result.url}`);
}

const failed = results.filter((result) => !result.ok);
if (failed.length > 0) {
  process.exitCode = 1;
}
