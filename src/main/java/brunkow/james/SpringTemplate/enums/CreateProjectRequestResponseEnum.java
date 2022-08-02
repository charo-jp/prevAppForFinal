package brunkow.james.SpringTemplate.enums;

public enum CreateProjectRequestResponseEnum {

    FAILURE("FAILURE"),
    SUCCESS("SUCCESS"),
    STUDENTNAME_ALREADY_EXISTS("STUDENTNAME_ALREADY_EXISTS"),
    STUDENTID_ALREADY_EXISTS("STUDENTID_ALREADY_EXISTS");

    private String response;
            CreateProjectRequestResponseEnum(String response){
                this.response = response;
            }
    public String getResponse() {
        return this.response;
    }
}