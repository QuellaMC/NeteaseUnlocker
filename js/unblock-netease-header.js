/*
 * NetEase Cloud Music - Request Header Modifier
 * Used to bypass region lock by spoofing IP address.
 *
 * @author QuellaMC
 * Last Modified: 2025-06-16
 */
if ($request.headers) {
    $request.headers['X-Real-IP'] = '118.88.88.88';
    $done({ headers: $request.headers });
} else {
    $done({});
}