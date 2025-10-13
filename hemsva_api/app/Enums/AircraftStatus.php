<?php

namespace App\Enums;

enum AircraftStatus: string
{
    case Active = 'Active';
    case Inactive = 'Inactive';
    case Maintenance = 'Maintenance';
}
