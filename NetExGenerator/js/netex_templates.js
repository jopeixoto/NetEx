function createNetExAgencyTemplate(){
    var template_xml = '<PublicationDelivery version="1.0" xsi:schemaLocation="http://www.netex.org.uk/netex ../../../xsd/NeTEx_publication.xsd" xmlns="http://www.netex.org.uk/netex" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';
	template_xml = template_xml + '<PublicationTimestamp>2001-12-17T09:30:47.0Z</PublicationTimestamp>';
	template_xml = template_xml + '<ParticipantRef>SYS001</ParticipantRef><PublicationRefreshInterval>P3M</PublicationRefreshInterval>';
	template_xml = template_xml + '<Description>GTFS Agency data</Description><dataObjects>';
	template_xml = template_xml + '<ResourceFrame version="any" id="mygtfsxm:ResourceFrame:DTA"><codespaces><Codespace id="mygtfsxm"><Xmlns>mygtfsxm</Xmlns><XmlnsUrl>http://www.demoagency.com/</XmlnsUrl><Description>Demo Agency</Description></Codespace></codespaces><FrameDefaults><DefaultCodespaceRef ref="mygtfsxm"/></FrameDefaults><organisations></organisations></ResourceFrame></dataObjects></PublicationDelivery>';
    return template_xml;
}

function createNetExCalendarDatesTemplate(){
	var template_xml = '<PublicationDelivery version="1.0" xsi:schemaLocation="http://www.netex.org.uk/netex ../../../xsd/NeTEx_publication.xsd" xmlns="http://www.netex.org.uk/netex" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';
	template_xml = template_xml + '<PublicationTimestamp>2001-12-17T09:30:47.0Z</PublicationTimestamp>';
	template_xml = template_xml + '<ParticipantRef>SYS001</ParticipantRef><PublicationRequest version="1.0"><RequestTimestamp>2001-12-17T09:30:47.0Z</RequestTimestamp><ParticipantRef>SYS002</ParticipantRef></PublicationRequest>';
	template_xml = template_xml + '<PublicationRefreshInterval>P3M</PublicationRefreshInterval>';
	template_xml = template_xml + '<Description>Agueda CalendarDates.txt file)</Description>';
	template_xml = template_xml + '<dataObjects><ServiceCalendarFrame version="any" id="mygtfsxm:ServiceCalendarFrame:FULLW">';
	template_xml = template_xml + '<codespaces><Codespace id="mygtfsxm"><Xmlns>mygtfsxm</Xmlns><XmlnsUrl>http://www.demoagency.com/</XmlnsUrl><Description>Demo Agency</Description></Codespace></codespaces>';
	template_xml = template_xml + '<FrameDefaults><DefaultCodespaceRef ref="mygtfsxm"/></FrameDefaults></ServiceCalendarFrame></dataObjects></PublicationDelivery>';
	return template_xml;
}

/*

dados a processar e a adicionar no XML do Calendar Dates

<contentValidityConditions>
				<AvailabilityCondition version="any" id="FULLW-2007-06-04">
					<FromDate>2007-06-04T00:00:00</FromDate>
					<ToDate>2007-06-04T24:00:00</ToDate>
					<IsAvailable>false</IsAvailable>
				</AvailabilityCondition>
				<AvailabilityCondition version="any" id="FULLW-2007-06-08">
					<FromDate>2007-06-08T00:00:00</FromDate>
					<ToDate>2007-06-08T24:00:00</ToDate>
					<IsAvailable>true</IsAvailable>
				</AvailabilityCondition>
			</contentValidityConditions>*/