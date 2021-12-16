import DWX_ZeroMQ_Connector_v2_0_1_RC8

_zmq = DWX_ZeroMQ_Connector_v2_0_1_RC8.DWX_ZeroMQ_Connector()

# subscribe to data:
_zmq._DWX_MTX_SUBSCRIBE_MARKETDATA_('EURUSD')
# tell MT4 to publish data:
_zmq._DWX_MTX_SEND_TRACKPRICES_REQUEST_(['EURUSD'])

_zmq._Market_Data_DB

