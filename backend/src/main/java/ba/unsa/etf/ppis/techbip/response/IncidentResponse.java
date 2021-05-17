package ba.unsa.etf.ppis.techbip.response;

import ba.unsa.etf.ppis.techbip.request.CategoryRequest;
import ba.unsa.etf.ppis.techbip.request.ClientRequest;

import java.util.List;

public class IncidentResponse {
    private String title;
    private String description;
    private CategoryResponse category;
    private ClientResponse client;
    private List<SolutionResponse> solutions;
}
