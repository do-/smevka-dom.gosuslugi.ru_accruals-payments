const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_export_accruals_payments:

    function () {

		return path.join (__dirname, '..', 'Static/dom-gosuslugi-ru-smev3-accruals-payments-egisso.xsd')
    
    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_export_accruals_payments:

    function () {
/*
    	throw new Error (`
			<faultcode>SOAP-ENV:Server</faultcode>
			<faultstring xml:lang=\"en\">Очередь, в которую должно быть отправлено сообщение, переполнена.</faultstring>
			<detail><ns3:DestinationOverflow xmlns:ns3=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/faults/1.1\" xmlns:ns2=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/basic/1.1\" xmlns:ns4=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/1.1\"><ns2:Code>fed0:PRODUCTION_AREA:FED0_CORE2 : TR:SYNC:PP:15</ns2:Code><ns2:Description>SMEV-600:Очередь, в которую должно быть отправлено сообщение, переполнена.</ns2:Description><ns3:MessageBrokerAddress>unknown</ns3:MessageBrokerAddress><ns3:DestinationName>delivery.it_315626_MNSV14_3S._REQUEST_</ns3:DestinationName></ns3:DestinationOverflow></detail>
    	`)
*/
		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_export_accruals_payments:

    function () {
    
    	let {rq: {data}} = this

    	return {
    	
    		ExportAccrualsPaymentsResponse: {
    			"exported-to-ftp": "true",
    			"create-date": "2001-12-17T09:30:47.000+03:00",
    		},
    		
    		_FSAttachmentsList: [
    			{uuid: '78cbaf77-4ebe-11ec-977f-005056b665bf', FileName: '/78cbaf77-4ebe-11ec-977f-005056b665bf.zip'},
    			{uuid: '78d9e04a-4ebe-11ec-977f-005056b665bf', FileName: '/78d9e04a-4ebe-11ec-977f-005056b665bf.zip'},
    		],
    		
    	}

    },
        
}