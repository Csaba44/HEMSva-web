<?php

namespace App\Enums\Enums;

enum FlightType: string
{
    case Mission = 'mission';
    case TransportFlight = 'transport_flight';
    case Repositioning = 'repositioning';

}
