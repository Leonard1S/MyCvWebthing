<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PersonalData extends Model
{
    protected $table = 'personal_data';
    protected $fillable = [
        'name', 'role', 'description', 'email', 'phone', 'github', 'linkedin', 
        'hero_image', 'quote', 'mission', 'vision', 'goals', 'school', 'grade'
    ];
}
