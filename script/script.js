var map = L.map('map').setView([34.8805754, 138.8658033], 5);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
}).addTo(map);

// add GeoJSON(AMeDAS spot)
$.getJSON("GeoJSON/AMeDASPoint.geoJSON", function (observation_site) {
	L.geoJson(observation_site, {
		onEachFeature: function (feature, layer) {
			// popup
			// layer.bindPopup("観測点名：<b>" + feature.properties.AMeDAS_name + "</b><br>観測点高度：<b>" + feature.properties.Altitude + "</b> m<br>天気：" + "" + "<br>気温：" + "") ;
			layer.bindPopup(
				"<div class='popup-body'>"
				+ "<div class='popup-title' style='font-size: 13px;'><b>アメダス観測情報(仮)</b></div>" + "<div style='margin-bottom: 5px;'>yyyy/mm/dd hh:mm 時点</div>" +
				"<table>"
				+ "<tr><th>観測点名</th><td>" + feature.properties.AMeDAS_name + "</td></tr>"
				+ "<tr><th>観測点標高（m）</th><td>" + feature.properties.Altitude + "</td></tr>"
				+ "<tr><th>天気</th><td>"
				+ "<tr><th>気温（℃）</th><td>"
				+ "<tr><th>降水量（mm）</th><td>"
				+ "<tr><th>風向</th><td>"
				+ "<tr><th>風速（m/s）</th><td>"
				+ "</table>"
				+ "<div style='margin-top: 5px;'>気象庁HPより</div>"
				+ "</div>");
		}
	}).addTo(map);
});
