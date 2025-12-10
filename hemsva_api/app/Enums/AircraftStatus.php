<?php

namespace App\Enums;

enum AircraftStatus: string
{
    case ACTIVE = "active";
    case INACTIVE = "inactive";
    case MAINTENANCE = "maintenance";
}
