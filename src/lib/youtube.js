// Server-only helper: resolves YouTube channel avatar ("logo") URLs from video IDs
// using the YouTube Data API v3. Requires YOUTUBE_API_KEY. Falls back to null per
// video on any failure so callers can fall back to the video thumbnail instead.

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

async function fetchJson(url) {
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 7 } }); // cache 1 week
  if (!res.ok) return null;
  return res.json();
}

// Maps { [videoId]: channelLogoUrl } for a list of video IDs.
export async function getChannelLogosByVideoIds(videoIds) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const uniqueIds = [...new Set(videoIds.filter(Boolean))];
  const result = {};

  if (!apiKey || uniqueIds.length === 0) return result;

  try {
    const videosData = await fetchJson(
      `${YOUTUBE_API_BASE}/videos?part=snippet&id=${uniqueIds.join(",")}&key=${apiKey}`
    );
    const videoToChannel = {};
    const channelIds = [];
    for (const item of videosData?.items ?? []) {
      videoToChannel[item.id] = item.snippet.channelId;
      channelIds.push(item.snippet.channelId);
    }

    const uniqueChannelIds = [...new Set(channelIds)];
    if (uniqueChannelIds.length === 0) return result;

    const channelsData = await fetchJson(
      `${YOUTUBE_API_BASE}/channels?part=snippet&id=${uniqueChannelIds.join(",")}&key=${apiKey}`
    );
    const channelLogos = {};
    for (const item of channelsData?.items ?? []) {
      channelLogos[item.id] =
        item.snippet.thumbnails?.high?.url ??
        item.snippet.thumbnails?.default?.url ??
        null;
    }

    for (const videoId of uniqueIds) {
      const channelId = videoToChannel[videoId];
      if (channelId && channelLogos[channelId]) {
        result[videoId] = channelLogos[channelId];
      }
    }
  } catch (error) {
    console.error("YouTube channel logo lookup failed:", error);
  }

  return result;
}
