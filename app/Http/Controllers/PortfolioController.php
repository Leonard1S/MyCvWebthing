<?php

namespace App\Http\Controllers;

use App\Models\PersonalData;
use App\Models\Experience;
use App\Models\Skill;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $personalData = PersonalData::first();
        $experiences = Experience::orderBy('id', 'desc')->get();
        return view('home', compact('personalData', 'experiences'));
    }

    public function portfolio()
    {
        $personalData = PersonalData::first();
        $skills = Skill::orderBy('category')->get()->groupBy('category');
        return view('portfolio', compact('personalData', 'skills'));
    }

    public function contact(Request $request)
    {
        // For simulation, we just return a success response
        return response()->json(['message' => 'Collaboration proposal sent successfully!']);
    }
}
