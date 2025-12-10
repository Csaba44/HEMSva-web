<?php

namespace App\Enums;

enum CompletionStatusEnum: string
{
    case ACCEPTED = "accepted";
    case ONGOING = "ongoing";
    case CANCELLED = "cancelled";
    case REVIEW_PENDING = "review pending";
    case REJECTED = "rejected";
}
