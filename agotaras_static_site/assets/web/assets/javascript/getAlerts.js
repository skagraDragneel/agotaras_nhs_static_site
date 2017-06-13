function writeDataToHtml(alertData)
{
	var alertContainer = document.getElementById("alertContainer");
	var alertHeaders = alertData[0];
	var alertContent = alertData[1];
	for(i = 1; i < alertHeaders.length; i++)
	{
		var headerElement = document.createElement("H1");
		var headerContent = document.createTextNode(alertHeaders[i]);
		headerElement.appendChild(headerContent);
		headerElement.classList.add("mbr-section-title");
		headerElement.classList.add("display-1");
		alertContainer.appendChild(headerElement);

	}
	console.log(alertData);
}

function parseData()
{
	Papa.parse("https://docs.google.com/spreadsheets/d/1fPl9kuU_hpjVRcxu9MQecoVmYrXB9uX_z1-jZRBXfyA/pub?output=csv", {
	download: true,
	complete: function(results) 
	{
		writeDataToHtml(results.data);
	}
	});
}
parseData();