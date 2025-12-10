<?php

namespace App\Enums;

enum FlightTypeEnum: string
{
    case MISSION = "mission";
    case REPOSITIONING = "repositioning";
    case TRANSPORT_FLIGHT = "transport flight";
}
